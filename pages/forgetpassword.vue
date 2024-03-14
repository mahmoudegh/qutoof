<template>

  <div class="background-imag">



    <div class="imag-qotof">
      <img
      src="@/assets/ab6761610000e5eb66a95bfbbcadc4c0a690e7c7.jpeg"


      class="imag-qotof"


      id="slide3"
      alt=""
    />
    <h2 class="quotof-h4-sign">Quotof</h2>
    <!-- Quotof -->
    </div>




    <form >
      <div class="containerlogi form-group mt-5 ">
        <!-- <p class="formlogin-h5">Enter your email address below and we will send you a link to reset or create your password.</p> -->

        <h6 class="formlogin-h6-forgt">Enter your email address below and we will send you a link to reset or create your password.</h6>

        <label for="exampleInputEmail1" class="word-emailaddress">Email address</label>
        <input type="email" class="form-control box-forget-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>

      <button type="submit" class=" btn btn-primary buton-submit-forgetpas">Submit</button>


      <div class="signin-withapp">

      </div>

    </form>

    <div>
      <p class="text-center mt-3 ml-5">Don't have an account?
        <span></span><a href=""><span>Sign Up.</span> </a>
      </p>
    </div>

    <div>

      <a href=""  class="link-qotof-sigin">© Qoutof</a>

    </div>


  </div>



</template>

<script>
export default {
  name: 'ForgetpasswordPage',
  layout: 'auth'
}
</script>
