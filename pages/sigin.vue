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


    <form>
      <div class="containerlogi form-group  ml-5 mt-5">
        <h4 class="formlogin-h5-sign">Sign for account</h4>

        <label for="exampleInputEmail1 mt-2">Email address</label>
        <input type="email" class="form-control sign-inpuform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="containerlogi form-group ml-5 mb-4">
        <label for="exampleInputPassword1 ">Password</label>
        <a class="forget-password">Forget your password?</a>
        <input type="password" class="form-control  sign-inpuform" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="containerlogi form-group form-check ml-5 mt-4">
        <input type="checkbox" class="form-check-input stay-inpuform " id="exampleCheck1">
        <label class="form-check-label  stay-inpuform-item" for="exampleCheck1">Stay signed in for amonth</label>


      </div>

      <div class="btn-primary-sub">

        <button type="submit" class=" btn btn-primary buton-submit">Submit</button>



      </div>
        <p class="p-sign">or sign in with</p>


      <div class="apps-signin">

        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-facebook-square icon-login"></i>

        <i class="fab fa-google-plus-square"></i>
      </div>



    </form>

    <div>
      <p class="text-center dont-have-account ml-5">Don't have an account?
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
  name: 'SiginPage',
  layout: 'auth'
}
</script>

