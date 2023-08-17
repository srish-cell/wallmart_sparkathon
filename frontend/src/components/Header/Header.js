import React from "react";
import "./Header.css";

function Header({ received, sold, available }) {

  return (
    // <div class="header bg-secondary">
    // <div class="container-fluid">
    //     <div class="header-body">
        // <div class="row">
        //     <div class="col-xl-3 col-lg-6">
        //     <div class="card shadow card-stats mb-4 mb-xl-0 fade-in-top">
        //         <div class="card-body ">
        //         <div class="row">
        //             <div class="col">
        //             <h5 class="card-title text-uppercase text-muted mb-0">Received Qty</h5>
        //             <span class="h2 font-weight-bold mb-0">{ received }</span>
        //             </div>
        //             <div class="col-auto">
        //             <div class="icon icon-shape bg-primary text-white rounded-circle shadow">
        //                 <i class="fas fa-virus"></i>
        //             </div>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        //     </div>
        //     <div class="col-xl-3 col-lg-6">
        //     <div class="card shadow card-stats mb-4 mb-xl-0 fade-in-top">
        //         <div class="card-body ">
        //         <div class="row">
        //             <div class="col">
        //             <h5 class="card-title text-uppercase text-muted mb-0">Sold Qty</h5>
        //             <span class="h2 font-weight-bold mb-0">{ sold }</span>
        //             </div>
        //             <div class="col-auto">
        //             <div class="icon icon-shape bg-green text-white rounded-circle shadow">
        //                 <i class="fas fa-heartbeat"></i>
        //             </div>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        //     </div>
        //     <div class="col-xl-3 col-lg-6">
        //     <div class="card shadow card-stats mb-4 mb-xl-0 fade-in-top">
        //         <div class="card-body ">
        //         <div class="row">
        //             <div class="col">
        //             <h5 class="card-title text-uppercase text-muted mb-0">Available Qty</h5>
        //             <span class="h2 font-weight-bold mb-0">{ available }</span>
        //             </div>
        //             <div class="col-auto">
        //             <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
        //                 <i class="fa fa-skull-crossbones"></i>
        //             </div>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        //     </div>
        // </div>
    //     </div>
    // </div>
    // </div>

    <div class="header-grid-container">

        <div class="card shadow card-stats mb-4 mb-xl-0 fade-in-top">
            <div class="card-body ">
                <div class="card-body-grid-container">
                    <div class="text-wrap">
                        <h5 class="card-title text-uppercase text-muted mb-0">Received Qty</h5>
                        <span class="h2 font-weight-bold mb-0">{ received }</span>
                    </div>
                    <div class="icon-wrap">
                        <div class="icon-wrap-container icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i class="fa fa-water"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow card-stats mb-4 mb-xl-0 fade-in-top">
            <div class="card-body ">
                <div class="card-body-grid-container">
                    <div class="text-wrap">
                        <h5 class="card-title text-uppercase text-muted mb-0">Sold Qty</h5>
                        <span class="h2 font-weight-bold mb-0">{ sold }</span>
                    </div>
                    <div class="icon-wrap">
                        <div class="icon-wrap-container icon icon-shape bg-info text-white rounded-circle shadow">
                            <i class="fa fa-water"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow card-stats mb-4 mb-xl-0 fade-in-top">
            <div class="card-body ">
                <div class="card-body-grid-container">
                    <div class="text-wrap">
                        <h5 class="card-title text-uppercase text-muted mb-0">Available Qty</h5>
                        <span class="h2 font-weight-bold mb-0">{ available }</span>
                    </div>
                    <div class="icon-wrap">
                        <div class="icon-wrap-container icon icon-shape bg-success text-white rounded-circle shadow">
                            <i class="fa fa-water"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>
  );

}

export default Header;
