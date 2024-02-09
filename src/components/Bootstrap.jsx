import React from 'react';
import './style/Bootstrap.css'
export const Bootstrap = ({ arrobj }) => {
  return (
    <>
    <h5>REACT PRICE CARD TASK</h5>
      <div className="container mt-5">
        <div className="row">
          {arrobj.map((item, index) => (
            <div className="col-sm-6 col-lg-4 mb-3 mb-sm-0" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="card-header">
                    <div className='design'>{item.plan}</div>
                   <div className='design1' ><strong>{item.month}</strong></div></div><br/>
                
                  <p className="card-text">
                  {item.plan === 'FREE' && (
                      <>
                       <span>&#10004;</span> Single User<br/><br/>
                       <span>&#10004;</span> 50 GB Storage<br/><br/>
                       <span>&#10004;</span> Unlimited Public Projects<br /><br/>
                       <span>&#10004;</span> Community Access<br /><br/>
                     <div className='design2'><span> &#10007;</span>Unlimited Private Projects<br/><br/></div>
                       <div className='design2'><span> &#10007;</span> Dedicated Phone Support<br/><br/></div>
                       <div className='design2'><span> &#10007;</span>Free Sub Domain<br/><br/></div>
                        <div className='design2'><span> &#10007;</span> Monthly Status Reports<br/><br/></div>
                      </>
                    )}
                    {item.plan === 'PLUS' && (
                      <>
                        <span>&#10004;</span> 5 users<br /><br/>
                         <span>&#10004;</span>50 GB storage<br /><br/>
                         <span>&#10004;</span>Unlimited Public Projects<br /><br/>
                        <span>&#10004;</span> Community Access<br /><br/>
                       <span >&#10004;</span> Unlimited Private Projects<br/><br/>
                         <span>&#10004;</span>Dedicated Phone Support<br/><br/>
                        <span>&#10004;</span> Free Sub Domain<br/><br/>
               <div className='design2'><span> &#10007;</span>Monthly Status Reports<br/><br/></div>   
                      </>
                    )}
                    {item.plan === 'PRO' && (
                      <>
                       <span>&#10004;</span>  Unlimited users<br /><br/>
                        <span>&#10004;</span> 50 GB storage<br /><br/>
                        <span>&#10004;</span> Unlimited Public Projects<br /><br/>
                        <span>&#10004;</span> Community Access<br /><br/>
                       <span>&#10004;</span>  Unlimited Private Projects<br/><br/>
                       <span>&#10004;</span>  Dedicated Phone Support<br/><br/>
                       <span>&#10004;</span>  Free Sub Domain<br/><br/>
                    <span>&#10004;</span> Monthly Status Reports<br/><br/>  
                      </>
                    )}
                  </p>
                   <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

