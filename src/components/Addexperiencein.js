import React from "react";
import '../styles/inside.css';
function inside(){
 return (
        <>
       <div className="Add-container ">
        <h2>ADD EXPERIENCE</h2>
        <form>
          <div className="form-group">
            <label htmlFor="companyname">Company Name</label>
            <input  className="input-field" type="text" id="companyname" name="companyname" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Position</label>
            <input  className="input-field" type="text" id="position" name="position" />
          </div>
         
        
        <div className="form-group">
            <label htmlFor="startdate">Start Date</label>
            <input  className="input-field" type="date" id="startdate" name="startdate" />
          </div>
          <div className="form-group">
            <label htmlFor="enddate">End Date</label>
            <input  className="input-field"type="date" id="enddate" name="enddate" />
           
          </div>
          
          </form>
          <button type="submit">save</button>
      </div>
        </>
 );


}
export default inside;