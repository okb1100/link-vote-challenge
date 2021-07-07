import { mount } from '@vue/test-utils'
import Toast from '@/components/Toast.vue'

describe('Toast.vue', () => {
  const content = 'some content'
  const wrapper = mount(Toast, {
    propsData:  {content, visible: true} 
  })
  
  it('displays given content', () => {
    expect(wrapper.text()).toMatch(content)
  })

  it('hides based on visible option', async () => {
    await wrapper.setProps( {visible: false})
    expect(wrapper.find('.toast-container').classes('visible')).toBe(false)
  })
})
