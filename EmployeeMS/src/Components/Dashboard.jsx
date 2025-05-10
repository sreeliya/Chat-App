import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <Link
                            to="/dashboard"
                            className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
                        >
                            <span className="fs-5 fw-bolder d-none d-sm-inline">
                                Code With Sree
                            </span>
                        </Link>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link text-white">
                                    <i className="bi bi-speedometer2 me-2"></i>
                                    <span className="d-none d-sm-inline">Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/employee" className="nav-link text-white">
                                    <i className="bi bi-people-fill me-2"></i>
                                    <span className="d-none d-sm-inline">Manage Employees</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/category" className="nav-link text-white">
                                    <i className="bi bi-tags-fill me-2"></i>
                                    <span className="d-none d-sm-inline">Category</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dash/profile" className="nav-link text-white">
                                    <i className="bi bi-person-circle me-2"></i>
                                    <span className="d-none d-sm-inline">Profile</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className="nav-link text-white">
                                    <i className="bi bi-box-arrow-right me-2"></i>
                                    <span className="d-none d-sm-inline">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col p-0 m-0">
                      <div className="p-2 d-flex justify-content-center shadow">
                       <h4>Employee Management System</h4>
            </div>

            <Outlet/>
        </div>
                    
            </div>
        </div>
    );
};

export default Dashboard;
