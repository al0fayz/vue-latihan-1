<template>
<div class="hold-transition login-page">
  <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="login-box">
                        <div class="login-logo text-light">
                            <b>Login</b>
                        </div>
                        <div class="card">
                            <div class="card-body login-card-body">
                            <form action="/login" method="post">
                                <div class="input-group mb-3">
                                    <input id="username" type="text" class="form-control" value="" name="username" placeholder="Username or Email" required autofocus>
                                    <div class="input-group-append input-group-text">
                                        <span class="fas fa-envelope blue"></span>
                                    </div>
                                </div>
                                <!-- <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span> -->
                                <div class="social-auth-links text-center mb-3">
                                    <br />
                                    <button type="submit" class="btn btn-block btn-primary">
                                        Login
                                    </button>
                                </div>
                                <a href="/reset/password"><i>Forgot Password </i></a>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style>
.login-page{
    background-image: url('../../assets/images/login.jpg'); 
    background-size: cover;
}
</style>