import React, { Component } from 'react';

export class Signup extends Component {
  render() {
    return (
      <div id="main" className="alt">

        <section id="one">
         <div className="inner">
   <div className="grid-wrapper">
      <div className="col-6">
         <h2 className="align-center">Register</h2>
        <form className="form">
        <div className="mb-5">
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="mb-5">
          <input type="email" name="email" placeholder="Email Address" />
        </div>
        <div className="mb-5">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div className="mb-5">
       <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
          />
        </div>
        <div className="mb-5">
          <button type="submit" className="button-primary">Submit</button>
        </div>
          </form>
      </div>
      <div className="col-6">
      <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eos veritatis harum? Sunt commodi, a nulla, maiores ut ipsam itaque qui sint officiis, voluptate quaerat similique officia omnis iste doloribus!</span><span>Quidem, labore. Quis id, eveniet ut tenetur omnis enim voluptatum adipisci laborum autem delectus tempora unde earum expedita. Facere distinctio non quia necessitatibus, tempora quibusdam ratione deserunt officia dignissimos porro.</span></p>
      </div>
      </div>
                </div>
            </section>
                    <section id="two">
         <div className="inner">
           <div className="grid-wrapper">
             <div className="col-3">
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatum deleniti possimus dolore, veritatis labore, commodi corporis deserunt quam mollitia tenetur, voluptatibus nobis! Alias cum expedita nisi quos, rem esse.</p>
             </div>
             <div className="col-3">
               <p>Ipsam exercitationem culpa excepturi, corporis quo ipsum eos. Esse sapiente qui nihil porro quis neque ducimus maiores, iure id debitis veritatis nisi blanditiis totam iste natus fugiat atque temporibus laudantium.</p>
             </div>
             <div className="col-3">
               <p>Ducimus quis delectus et, minus ea nesciunt a molestiae, tempora quidem quos sit commodi doloremque illo, nisi pariatur sequi maiores excepturi! Adipisci, cum aliquam. Nihil, aspernatur? Atque amet error eveniet.</p>
             </div>
             <div className="col-3">
               <p>Doloremque fuga vitae quos maxime labore veniam eius tempora omnis quas, sunt ab voluptatum odit inventore excepturi saepe debitis tempore officiis qui itaque. Eum temporibus quasi molestiae! In, perspiciatis! Repudiandae.</p>
             </div>
           </div>
         </div>
         </section>
      </div>
    )
  }
}

export default Signup;
