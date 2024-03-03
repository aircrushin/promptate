// Import the necessary testing utilities and the component
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import PromptWork from '@/components/PromptWork.vue'; // Adjust the path according to your file structure
import { nextTick } from 'vue';

// If your component uses external utilities or plugins, mock them
vi.mock('@/utils/copy', () => ({
  default: vi.fn(),
}));

describe('PromptWork', () => {
  it('renders properly', () => {
    const wrapper = mount(PromptWork, {
      props: {
        modelValue: '',
        title: '测试区',
        isGPT: false,
      },
    });

    // Check if the title renders correctly
    expect(wrapper.find('.title').text()).toBe('测试区');
  });

  it('updates inputValue on input', async () => {
    const wrapper = mount(PromptWork, {
      props: {
        modelValue: '',
        title: '测试区',
        isGPT: false,
      },
    });

    // Simulate user input
    const textarea = wrapper.find('textarea.input');
    await textarea.setValue('New input text');

    // Assert the inputValue is updated
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['New input text']);
  });

  it('clears input when the clear button is clicked', async () => {
    const wrapper = mount(PromptWork, {
      props: {
        modelValue: 'Initial text',
        title: '测试区',
        isGPT: false,
      },
    });

    // Click the clear button
    await wrapper.findAll('n-button.btn')[1].trigger('click');

    // Assert the inputValue is cleared
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual(['']);
  });

  it('copies text to clipboard on button click', async () => {
    const wrapper = mount(PromptWork, {
      props: {
        modelValue: 'Text to copy',
        title: '测试区',
        isGPT: false,
      },
    });

    // Click the copy button
    await wrapper.findAll('n-button.btn')[0].trigger('click');

    // Assert the copyToClipboard function was called
    expect(copyToClipboard).toHaveBeenCalledWith('Text to copy');
  });
});
