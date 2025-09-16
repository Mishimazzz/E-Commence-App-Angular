import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button 
    class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl sahdow-md hover:opacity-90 flex items-center justify-between"
    (click) ="btnClicked.emit()"
    >
      {{lable()}}
    </button>
  `
})
export class PrimaryButton {
  lable = input('');//从父组件接收一个 label
  btnClicked = output();// 向父组件输出一个点击事件
}
