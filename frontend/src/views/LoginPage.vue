<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class LoginPage extends Vue {
  validateEmail = (rule: any, value: string, callback: any) => {
    const validationRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validationRule.test(value)) {
      callback(new Error("Please input corect email"));
    } else {
      callback();
    }
  };
  ruleForm = {
    email: "",
    password: ""
  };
  get rules() {
    const rules = {
      email: [
        { required: true, message: "Please input Email", trigger: "blur" },
        { validator: this.validateEmail, trigger: "blur" }
      ],
      password: [
        { required: true, message: "Please input password", trigger: "blur" },
        {
          min: 3,
          max: 50,
          message: "Length should be 3 to 50",
          trigger: "blur"
        }
      ]
    };
    return rules;
  }

  submitForm(formName: any) {
    (this.$refs[formName] as any).validate((valid: any) => {
      if (valid) {
        // alert("submit!");
        axios
          .post("http://localhost:3000/login", {
            email: this.ruleForm.email,
            password: this.ruleForm.password
          })
          .then(response => {
            const token = response.data;
            localStorage.setItem("currentUser", JSON.stringify(token));
            console.log(this.$router);
            this.$router.push({ name: 'Home' });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  resetForm(formName: any) {
    const ref: any = this.$refs[formName];
    ref.resetFields();
  }
}
</script>

<template>
  <el-row type="flex" justify="center">
    <el-col :span="6">
      <div>
        <h1>Login</h1>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="Email" prop="email">
            <el-input
              type="text"
              v-model="ruleForm.email"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >Submit</el-button
            >
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
