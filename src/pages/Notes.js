import React from "react";

const Notes = () => {
  return (
    <>
      <p style={{ float: "left", marginLeft: "10px" }}>
        <b>Notes</b>
      </p>

      <button type="button" class="btn btn-link btn-sm" style={{ float: "right", marginTop: "-3px" }}>see all</button>

      <br />

      <div>
        <div className="div10 my-3" >
          {" "}
          <p style={{ float: "left", marginLeft: "0px", marginTop: "2px"}}>
            - Lorem Ipsum is simply dummy text.
            <br />{" "}
          </p>
          <p style={{ float: "left", marginLeft: "0px", marginTop: "2px" }}>
            - Lorem Ipsum is simply dummy text.
            <br />{" "}
          </p>
          <p style={{ float: "left", marginLeft: "0px", marginTop: "2px" }}>
            - Lorem Ipsum is simply dummy text.
            <br />{" "}
          </p>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            style={{ float: "right", marginRight: "10px" }}
          >
            save note
          </button>
        </div>
      </div>
    </>
  );
};

export default Notes;
