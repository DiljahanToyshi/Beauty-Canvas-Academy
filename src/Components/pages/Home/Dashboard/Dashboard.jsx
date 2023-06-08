import useCart from "../../../../hooks/useCart";
import DashboardLayout from "../../../layouts/DashboardLayout";
import Container from "../Container";

const Dashboard = () => {
  const [cart] = useCart();
  console.log(cart)
  return <div>
    <p className="mt-8">Enrolled Course:{cart?.length }</p>
    <Container>
      <DashboardLayout></DashboardLayout>
    </Container>
  </div>;
};

export default Dashboard;
