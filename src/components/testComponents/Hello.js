import {
  vShow,
  withDirectives,
} from 'vue'
export default {
  render({ $slots, $attrs : { name }, $emit}) {
    // console.log(props)
    return (
      <div onClick={() => {
        $emit('updateName')
      }}>
        hello {name}
        {$slots.desc()}
        {withDirectives(<h1>Count: 2</h1>, [[vShow, true]])}
      </div>
    )
  }
}