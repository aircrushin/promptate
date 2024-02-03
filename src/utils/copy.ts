// 定义一个通用的复制到剪贴板的函数
const copyToClipboard = (text: string): void => {
    // 检查text是否定义且不为空或仅包含空白字符
    if (text && text.trim()) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          //@ts-ignore
          window.onmessage!.success("复制成功");
          // 复制成功后的操作，如显示通知或更改按钮状态
          console.log("复制成功！");
        })
        .catch((err) => {
          // 处理复制失败的情况
          //@ts-ignore
          window.onmessage!.error("复制失败:");
          console.error("复制失败: ", err);
        });
    }
  };
  
export default copyToClipboard;
  