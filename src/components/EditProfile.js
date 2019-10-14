import React from "react";

const EditProfile = () => {
  return (
    <div className="columns" style={{ marginTop: "10px" }}>
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div className="field">
                <label className="label">Profile Overview</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Tell us about yourself."
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

export default EditProfile;
