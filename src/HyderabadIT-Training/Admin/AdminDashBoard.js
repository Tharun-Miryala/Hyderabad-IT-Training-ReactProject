import { Button } from "@mui/material";
import React, { useState } from "react";
import AddBatches from "./AddBatches";
import ViewEnquiry from "./ViewEnquiry";
import CourseRegistered from "./CourseRegistered";
import Batches from "../Batches";

const AdminDashBoard = () => {
  const [fetchView, setFetchView] = useState("");
  const DashboardFetching = () => {
    if (fetchView === "") {
      return <div>Loading....!</div>;
    } else if (fetchView === "courseRegistered") {
      return <CourseRegistered />;
    } else if (fetchView === "latestBatch") {
      return <AddBatches />;
    } else if (fetchView === "viewEnquiry") {
      return <ViewEnquiry />;
    } else if (fetchView === "editBatch") {
      return <Batches batchtitle="Action" />;
    }
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div
          className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 p-5"
          id="adminnavline"
        >
          <h3 className="mb-3">Admin DashBord</h3>
          <nav>
            <Button
              variant="contained"
              color="success"
              className="w-100 p-2 m-2 "
              onClick={() => {
                setFetchView("courseRegistered");
              }}
            >
              Course Registered student
            </Button>
            <Button
              variant="contained"
              color="success"
              className="w-100 p-2 m-2 "
              onClick={() => {
                setFetchView("latestBatch");
              }}
            >
              Add Batches
            </Button>
            <Button
              variant="contained"
              color="success"
              className="w-100 p-2 m-2 "
              onClick={() => {
                setFetchView("editBatch");
              }}
            >
              Edit Batches
            </Button>
            <Button
              variant="contained"
              color="success"
              className="w-100 p-2 m-2 "
              onClick={() => {
                setFetchView("viewEnquiry");
              }}
            >
              view Enquiry
            </Button>
          </nav>
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 p-5">
          {DashboardFetching()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
