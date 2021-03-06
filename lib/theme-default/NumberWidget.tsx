import { CommonWidgetPropsDefine, SelectionWidgetName, CommonWidgetNames, CommonWidgetDefine } from '../types'
import { defineComponent } from 'vue'
// 组件解耦(高阶组件) 复用
import { withFormItem } from './FormItem'

// 组件定义
const NumberWidget:CommonWidgetDefine = withFormItem(defineComponent({
  name: 'NumberWidget',
  props: CommonWidgetPropsDefine,
  setup (props) {
    const handleChange = (v: any) => {
      const value = v.target.value
      v.target.value = props.value
      props.onChange(value)
    }
    return () => {
      const { value } = props
      return (
        <input type="number" value={value as any} onInput={handleChange} />
      )
    }
  }
})) as unknown as CommonWidgetDefine

export default NumberWidget
