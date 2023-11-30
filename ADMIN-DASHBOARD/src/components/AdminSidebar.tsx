import { Link, useLocation } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
const AdminSidebar = () => {
    const location = useLocation();
    return (
        <aside>
            <h2>Logo.</h2>
            <div>
                <h5>Dashboard</h5>
                <ul>
                    <li>
                        <Link to="/admin/dashboard">
                            <RiDashboardFill />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/product">
                            <RiShoppingBag3Fill />
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/custmer">
                            <IoIosPeople />
                            Customer
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/transaction">
                            <AiFillFileText />
                            Transaction
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default AdminSidebar