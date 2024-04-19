import React from 'react'

function Signin() {
  return (
    <div>
        <form>
            <h2>Login</h2>
            <div class="group">
                <input type="text" /><span class="highlight"></span><span class="bar"></span>
                <label>Name</label>
            </div>
            <div class="group">
                <input type="email" /><span class="highlight"></span><span class="bar"></span>
                <label>Email</label>
            </div>
            <button type="button" class="button buttonBlue">Login
                <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </button>
        </form>

    </div>
  )
}

export default Signin