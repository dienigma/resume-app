import React from "react";

const EditAwards = () => {
  return (
    <div className="columns" style={{ marginTop: "10px" }}>
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Name of the award or certification"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Go on brag about yourself"
                  ></textarea>
                </div>
              </div>
              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <a className="button is-primary">Submit</a>
                </p>
                <p className="control">
                  <a className="button is-light">Cancel</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAwards;
