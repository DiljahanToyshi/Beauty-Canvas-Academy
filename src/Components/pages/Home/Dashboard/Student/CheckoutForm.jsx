import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import './CheckoutForm.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ImSpinner9 } from 'react-icons/im'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import { updateStatus } from '../../../../api/course'
import { AuthContext } from '../../../../providers/AuthProvider'
const CheckoutForm = ({ course, closeModal,cart}) => {
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');
const navigate = useNavigate();
  useEffect(() => {
    if (course?.price > 0) {
      axiosSecure
        .post('/create-payment-intent', { price: course?.price })
        .then(res => {
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [course?.price, axiosSecure])

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    const { error,paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
    //  console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      })

    if (confirmError) {
      console.log(confirmError)
      setCardError(confirmError.message)
    }

    console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price:course.price,
                name:user?.displayName,
                date: new Date(),
                BookedId:course._id,
                                bookedItems:  course.courseId,
                                AvailableSeats: course.AvailableSeats,StudentNumber: course.StudentNumber,

                courseName: course.courseName,
                status: 'service pending'
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult) {
                    toast.success("Payment SuccesFUl")  
                                  navigate('/dashboard/enrolledclasses')
  // display confirm
                    }
                })
        }
  }

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay ${course.price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
                  {transactionId && <p className="text-green-500">Transaction complete </p>}

    </>
  )
}

export default CheckoutForm