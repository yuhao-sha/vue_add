import Vue from 'vue'
import {
  Form,
  Button,
  Input,
  FormItem,
  Message
} from 'element-ui'


Vue.use(Form);
Vue.use(Button);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Message);

Vue.prototype.$message = Message;