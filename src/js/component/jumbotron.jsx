import React from "react";

const Jumbotron = ()=> {
    return (
        <div className="container p-5 mb-4 bg-body-tertiary rounded-3 bg-light">
            <div className="py-5">
                <h1 className="display-5 fw-bold d-flex justify-content-start">A Warm Welcome!</h1>
                <p className="d-flex justify-content-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus eum corporis, perspiciatis, optio aliquid numquam neque voluptas sequi, officiis facere accusamus eligendi adipisci. Officia sed commodi enim tempore exercitationem?</p>
                <button className="btn btn-primary btn-lg d-flex justify-content-start" type="button">Call to action!</button>
            </div>
        </div>
    );
};

export default Jumbotron;
