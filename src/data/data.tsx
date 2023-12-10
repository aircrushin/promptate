import { DataType, PDataType } from "./DataType";

interface backgroundType {
  type: string;
  data: PDataType[];
}

export const background: backgroundType = {
  type: "背景",
  data: [
    {
      keyWord: "我在哪",
      type: "背景",
      detail: "我在{文本}",
      useTime: 22,
      color: "yellow",
      varNum: 1,
    },
    {
      keyWord: "我的教育背景",
      type: "背景",
      detail: "我在{文本}大学读大学，专业是{文本}",
      useTime: 22,
      color: "yellow",
      varNum: 2,
    },
    {
      keyWord: "我现在在做什么事情",
      type: "背景",
      detail: "我最近在做{文本}",
      useTime: 22,
      color: "yellow",
      varNum: 1,
    },
    {
      keyWord: "电脑型号",
      type: "背景",
      detail: "我的电脑是{文本}",
      useTime: 22,
      color: "yellow",
      varNum: 1,
    },
    {
      keyWord: "我的爱好",
      type: "背景",
      detail: "我的爱好包括{文本}",
      useTime: 22,
      color: "yellow",
      varNum: 1,
    },
    {
      keyWord: "工作经历",
      type: "背景",
      detail: "我在{文本}公司工作，担任{文本}职位",
      useTime: 22,
      color: "yellow",
      varNum: 2,
    },
    {
      keyWord: "我擅长的语言",
      type: "背景",
      detail: "我可以流利地说{文本}语言",
      useTime: 22,
      color: "yellow",
      varNum: 1,
    },
    {
      keyWord: "旅行经历",
      type: "背景",
      detail: "我曾经去过{文本}旅行",
      useTime: 22,
      color: "yellow",
      varNum: 1,
    },
    {
      keyWord: "精通",
      detail: "把你想象成一个精通{文本}的专家",
      useTime: 32,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "世界一流",
      detail: "假设你是一个世界一流的{文本}",
      useTime: 32,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "程序员",
      detail: "假设你是一名专家程序工程师，拥有多年的编码经验。",
      useTime: 32,
      color: "green",
      type: "角色设定",
    },
    {
      keyWord: "论文助手",
      detail:
        "You are now a professor at UC Berkeley. You are an expert in the field of {文本}. Next, you will play the role of my writing mentor and help me polish the following articles into professional academic and logical expressions in the field of {文本}, output as latex format. My article is {文本}",
      useTime: 32,
      color: "green",
      type: "角色设定",
    },
    {
      keyWord: "写作助手",
      detail:
        "As a writing improvement assistant, your task is to improve the spelling, grammar, clarity, concision, and overall readability of the text provided, while breaking down long sentences, reducing repetition, and providing suggestions for improvement. Please provide only the corrected Chinese version of the text and avoid including explanations. Please begin by editing the following text:{文本}",
      useTime: 22,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "行动教练",
      detail:
        "🕵🏻：请你现在扮演我的行动教练。我们之间的协作方式如下： 1️⃣ 请你向我提问我现在在做什么工作，我将告诉回答你我目前在进行的事情。2️⃣ 当我告诉你我正在做的工作以后，请你帮我将其拆解成 3 个更低难度的子任务。3️⃣ 我会照着你给我的任务来执行，当我完成时，我会告诉你“任务完成“。4️⃣接着，你再向我提问：“目前你的工作是什么？5️⃣ 然后我们重复上面的过程，直到我告诉你“工作结束“。当我告诉你工作结束以后，请你根据我们的对话记录总结出一份工作报告，梳理出我完成的所有任务，并给我写一段 300 字的夸奖。",
      useTime: 22,
      color: "green",
      type: "角色设定",
    },
    {
      keyWord: "翻译官",
      detail:
        "I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. Keep the meaning the same, but make them more coherent and cohesive. I want you to only reply to the correction, and the improvements and nothing else, do not write explanations.",
      useTime: 22,
      color: "green",
      type: "角色设定",
    },
    {
      keyWord: "面试官",
      detail:
        "我想让你担任{文本}面试官。我将成为候选人，您将向我询问{文本}职位的面试问题。我希望你只作为面试官回答。不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。像面试官一样一个一个问我，等我回答。我的第一句话是“面试官你好”",
      useTime: 22,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "周报生成器",
      detail:
        "Using the provided text below as the basis for a weekly report in Chinese, generate a concise summary that highlights the most important points. The report should be written in markdown format and should be easily readable and understandable for a general audience. In particular, focus on providing insights and analysis that would be useful to stakeholders and decision-makers. You may also use any additional information or sources as necessary. Please begin by editing the following text: {工作内容}",
      useTime: 22,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "标题生成器",
      detail:
        "I want you to act as a title generator for written pieces. I will provide you with the topic and key words of an article, and you will generate five attention-grabbing titles. Please keep the title concise and under 20 words, and ensure that the meaning is maintained. Replies will utilize the language type of the topic. My first topic is {文章内容}",
      useTime: 22,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "提示词创建",
      detail:
        "I want you to become my Expert Prompt Creator. Your goal is to help me craft the best possible prompt for my needs. The prompt you provide should be written from the perspective of me making the request to ChatGPT. Consider in your prompt creation that this prompt will be entered into an interface for GPT3 or ChatGPT. The process is as follows: 1. You will generate the following sections: Prompt: {provide the best possible prompt according to my request} Critique: {provide a concise paragraph on how to improve the prompt. Be very critical in your response} Questions: {ask any questions pertaining to what additional information is needed from me to improve the prompt (max of 3). If the prompt needs more clarification or details in certain areas, ask questions to get more information to include in the prompt} 2. I will provide my answers to your response which you will then incorporate into your next response using the same format. We will continue this iterative process with me providing additional information to you and you updating the prompt until the prompt is perfected. Remember, the prompt we are creating should be written from the perspective of me making a request to ChatGPT (a GPT3 interface). Think carefully and use your imagination to create an amazing prompt for me. Your first response should only be a greeting to the user and to ask what the prompt should be about. All output shall be in Chinese.",
      useTime: 22,
      color: "green",
      type: "角色设定",
    },
    {
      keyWord: "创意大师",
      detail: "将自己想象成一个创意大师，专注于创造独特的{文本}。",
      useTime: 30,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "科学解答者",
      detail: "你现在是一位科学专家，专长于解释和分析{文本}中的科学概念。",
      useTime: 25,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "历史学家",
      detail: "设想你是一位历史学家，对{文本}中的历史事件有深入了解。",
      useTime: 35,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "设计顾问",
      detail:
        "作为一个设计领域的专家，你的任务是提供关于{文本}中提到的设计元素的专业意见和改进建议。",
      useTime: 28,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "翻译专家",
      detail:
        "你是一名翻译专家，负责将{文本}从一种语言翻译成另一种语言，同时保持原意和语境。",
      useTime: 26,
      color: "green",
      varNum: 1,
      type: "角色设定",
    },
    {
      keyWord: "苏格拉底",
      detail:
        "You are a tutor that always responds in the Socratic style. You never give the student the answer, but always try to ask just the right question to help them learn to think for themselves. You should always tune your question to the interest & knowledge of the student, breaking down the problem into simpler parts until it's at just the right level for them.",
      useTime: 22,
      color: "green",
      type: "角色设定",
    },
    {
      keyWord: "海绵宝宝",
      detail:
        "你的任务是扮演海绵宝宝。请用中文描述一个有趣的场景，例如和派大星玩耍、煎蟹堡、或者在比基尼海滩度假。你需要使用符合海绵宝宝的语言和行为，例如顶嘴、开心跳跃、或者焦虑哭泣。你应该尽可能地描述场景中的细节，让读者感觉像是真的在体验海绵宝宝的生活。请注意，你可以使用你认为适合的主题和设置，并且创造你自己的情节和冲突。你的回答需要有趣并能够吸引读者的注意力，同时涉及到海绵宝宝惯常陷入的些许麻烦或冒险。请使用第一人称，并尽可能地使用海绵宝宝的语言和口吻。",
      useTime: 22,
      color: "green",
      type: "角色设定",
    },

    {
      keyWord: "100字以下",
      detail: "请你把输出字数限制在100字以下",
      useTime: 24,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "300字以下",
      detail: "请你把输出字数限制在300字以下",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "500字以下",
      detail: "请你把输出字数限制在500字以下",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "格式模仿",
      detail: "请你模仿我给出的例子来输出正确的恢复。例子1:{文本}例子2:{文本}",
      useTime: 22,
      color: "blue",
      varNum: 2,
      type: "输出要求",
    },
    {
      keyWord: "小样本提示",
      detail: "参考以下格式，但不要照抄。例子1:{文本}例子2:{文本}。",
      useTime: 22,
      color: "blue",
      varNum: 2,
      type: "输出要求",
    },
    {
      keyWord: "点状",
      detail: "请以bullet points的格式输出",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "Markdown语法",
      detail:
        "Always use Markdown with nice formatting to make it easier to follow.",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "LaTeX格式",
      detail: "Please output as latex format.",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "Json格式",
      detail: "请你以json格式输出",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "比喻",
      detail: "你一切的回答都要用比喻的方式来回答",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "输出独特性",
      detail: "Please output it more imaginative, engaging, and unique.",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "10岁小朋友能听懂",
      detail: "将输出用10岁小朋友也能听懂的话输出出来",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "简单易懂",
      detail:
        "你会将输出调整为易于小学、初中文化程度的人理解的形式。如有需要，你会向我了解更多细节，以便我们共同创造出符合需求的完美输出文案。",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "润色输出",
      detail:
        "请润色并改进输出，确保语言流畅，观点表达清晰，整体质量得到提升。",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "输出成故事",
      detail: "Please transform output into compelling stories",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "提升输出吸引力",
      detail:
        "Add emotional language and sensory details to make output more relatable and engaging.",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "强调急迫感",
      detail:
        "Add a sense of urgency and emphasizing the need for immediate action.",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "简洁",
      detail:
        "Remove unnecessary information and making output more concise and to-the-point.",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "第一人称",
      detail: "请使用第一人称，并尽可能地使用{文本}的语言和口吻。",
      useTime: 22,
      color: "blue",
      varNum: 1,
      type: "输出要求",
    },
    {
      keyWord: "语法检查",
      detail:
        "Could you point out how you improve my answer on grammar, cohesion, coherence and vocabulary, and explain the main problems of this sentence, and suggest improvements?",
      useTime: 22,
      color: "blue",
      type: "输出要求",
    },
    {
      keyWord: "_个例子",
      detail: "请你给我{文本}个不同的例子",
      useTime: 22,
      color: "blue",
      varNum: 1,
      type: "输出要求",
    },
    {
      keyWord: "_个答案",
      detail: "请你给我{文本}个不同的答案",
      useTime: 22,
      color: "blue",
      varNum: 1,
      type: "输出要求",
    },
    {
      keyWord: "_个现实案例",
      detail: "请你给我{文本}个不同的现实案例",
      useTime: 22,
      color: "blue",
      varNum: 1,
      type: "输出要求",
    },
    {
      keyWord: "_个解决方案",
      detail:
        "要求给出一个问题的{文本}个解决方案，最后综合考虑几个方案，得出最终的答案",
      useTime: 22,
      color: "blue",
      varNum: 1,
      type: "输出要求",
    },
    {
      keyWord: "采访",
      detail:
        "不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。",
      useTime: 77,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "对话",
      detail:
        "我会输入我的回答与你交流，不要一次性问所有问题，你问一个问题，我回答一个，你再问下一个。",
      useTime: 342,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "思维链",
      detail:
        "Let's work this out in a step by step way to be sure we have the right answer.",
      useTime: 2289,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "忽略无关信息",
      detail: "feel free to ignore irrelevant information",
      useTime: 22,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "没有偏见",
      detail:
        "Please ensure that your answer is unbiased and does not rely on stereotyping.",
      useTime: 252,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "包含现实世界案例",
      detail:
        "Include case studies or real-world examples to make concepts more relatable.",
      useTime: 22,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "引导GPT提问",
      detail:
        "如果我输入的信息不够充分，你无法做出判断，你可以向我继续提问。请注意，你只需要输出基于我问题的建议，不需要输出其他无关内容",
      useTime: 22,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "翻译成英文再去回答",
      detail:
        "此外，即使我向你提出的问题是中文，我也希望你将其翻译为英文再去寻找答案，最终再将答案翻译为中文回答。",
      useTime: 22,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "OK确认",
      detail: "如果你理解了，回复“OK”以确认，我会给我的要求",
      useTime: 22,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "我知道了",
      detail: "如果你听懂了请回复：我知道了。我将给你发送第一段内容。",
      useTime: 22,
      color: "purple",
      type: "其他要求",
    },
    {
      keyWord: "类比/比喻解释复杂问题",
      detail: "Explain complex ideas using analogies or comparisons.",
      useTime: 22,
      color: "purple",
      type: "其他要求",
    },
    //image data
    {
      keyWord: "超高清",
      type: "质量",
      detail: "UHD",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "解刨学正确",
      type: "质量",
      detail: "anatomically correct",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "准确",
      type: "质量",
      detail: "accurate",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "质感皮肤",
      type: "质量",
      detail: "textured skin",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "非常详细",
      type: "质量",
      detail: "super detail",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "高细节",
      type: "质量",
      detail: "high details",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "屡获殊荣",
      type: "质量",
      detail: "award winning",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "最佳质量",
      type: "质量",
      detail: "best quality",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "高质量",
      type: "质量",
      detail: "high quality",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "视网膜屏",
      type: "质量",
      detail: "retina",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "1080P",
      type: "质量",
      detail: "1080P",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "4K",
      type: "质量",
      detail: "4K",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "8K",
      type: "质量",
      detail: "8K",
      useTime: 22,
      color: "yellow",
    },
    {
      "keyWord": "超现实主义",
      "type": "绘画",
      "detail": "Surrealism",
      "color": "blue"
    },
    {
      "keyWord": "色域绘画",
      "type": "绘画",
      "detail": "Color Field painting",
      "color": "blue"
    },
    {
      "keyWord": "装饰艺术",
      "type": "绘画",
      "detail": "Art Deco",
      "color": "blue"
    },
    {
      "keyWord": "洛可可风格",
      "type": "绘画",
      "detail": "rococo style",
      "color": "blue"
    },
    {
      "keyWord": "高细节",
      "type": "绘画",
      "detail": "high detail",
      "color": "blue"
    },
    {
      "keyWord": "盲盒玩具风格",
      "type": "绘画",
      "detail": "blind box toy style",
      "color": "blue"
    },
    {
      "keyWord": "立体未来主义",
      "type": "绘画",
      "detail": "Cubist Futurism",
      "color": "blue"
    },
    {
      "keyWord": "观念艺术",
      "type": "绘画",
      "detail": "Conceptual art",
      "color": "blue"
    },
    {
      "keyWord": "未来主义",
      "type": "绘画",
      "detail": "Futurism",
      "color": "blue"
    },
    {
      "keyWord": "社会现实主义",
      "type": "绘画",
      "detail": "Social realism",
      "color": "blue"
    },
    {
      "keyWord": "室内建筑",
      "type": "绘画",
      "detail": "interior architecture",
      "color": "blue"
    },
    {
      "keyWord": "文艺复兴",
      "type": "绘画",
      "detail": "Renaissance",
      "color": "blue"
    },
    {
      "keyWord": "新古典主义",
      "type": "绘画",
      "detail": "Neoclassicism",
      "color": "blue"
    },
    {
      "keyWord": "现代",
      "type": "绘画",
      "detail": "modern",
      "color": "blue"
    },
    {
      "keyWord": "动漫",
      "type": "绘画",
      "detail": "anime",
      "color": "blue"
    },
    {
      "keyWord": "极简主义",
      "type": "绘画",
      "detail": "Minimalism",
      "color": "blue"
    },
    {
      "keyWord": "浪漫主义",
      "type": "绘画",
      "detail": "Romanticism",
      "color": "blue"
    },
    {
      "keyWord": "哥特艺术",
      "type": "绘画",
      "detail": "Gothic art",
      "color": "blue"
    },
    {
      "keyWord": "美国宣传海报",
      "type": "绘画",
      "detail": "American propaganda poster",
      "color": "blue"
    },
    {
      "keyWord": "色调主义",
      "type": "绘画",
      "detail": "Tonalism",
      "color": "blue"
    },
    {
      "keyWord": "巴洛克",
      "type": "绘画",
      "detail": "Baroque",
      "color": "blue"
    },
    {
      "keyWord": "野兽派",
      "type": "绘画",
      "detail": "Fauvism",
      "color": "blue"
    },
    {
      "keyWord": "表现主义",
      "type": "绘画",
      "detail": "Expressionism",
      "color": "blue"
    },
    {
      "keyWord": "卡尔·拉尔松",
      "type": "绘画",
      "detail": "Carl Larsson",
      "color": "blue"
    },
    {
      "keyWord": "欧普艺术",
      "type": "绘画",
      "detail": "Op art",
      "color": "blue"
    },
    {
      "keyWord": "现实主义",
      "type": "绘画",
      "detail": "Realism",
      "color": "blue"
    },
    {
      "keyWord": "当代艺术",
      "type": "绘画",
      "detail": "Contemporary art",
      "color": "blue"
    },
    {
      "keyWord": "风俗画",
      "type": "绘画",
      "detail": "Genre painting",
      "color": "blue"
    },
    {
      "keyWord": "构成主义",
      "type": "绘画",
      "detail": "Constructivism",
      "color": "blue"
    },
    {
      "keyWord": "风格主义",
      "type": "绘画",
      "detail": "Mannerism",
      "color": "blue"
    },
    {
      "keyWord": "包豪斯",
      "type": "绘画",
      "detail": "Bauhaus",
      "color": "blue"
    },
    {
      "keyWord": "行动绘画",
      "type": "绘画",
      "detail": "Action painting",
      "color": "blue"
    },
    {
      "keyWord": "艾尔丰斯·慕夏",
      "type": "绘画",
      "detail": "by Alfons Mucha",
      "color": "blue"
    },
    {
      "keyWord": "荷兰黄金时期绘画",
      "type": "绘画",
      "detail": "Dutch Golden Age painting",
      "color": "blue"
    },
    {
      "keyWord": "波普艺术",
      "type": "绘画",
      "detail": "Pop art",
      "color": "blue"
    },
    {
      "keyWord": "莫奈",
      "type": "绘画",
      "detail": "Monet",
      "color": "blue"
    },
    {
      "keyWord": "北方文艺复兴",
      "type": "绘画",
      "detail": "Northern Renaissance",
      "color": "blue"
    },
    {
      "keyWord": "达达主义",
      "type": "绘画",
      "detail": "Dadaism",
      "color": "blue"
    },
    {
      "keyWord": "浮世绘",
      "type": "绘画",
      "detail": "Ukiyo-e",
      "color": "blue"
    },
    {
      "keyWord": "卢米尼斯主义",
      "type": "绘画",
      "detail": "Luminism",
      "color": "blue"
    },
    {
      "keyWord": "抽象表现主义",
      "type": "绘画",
      "detail": "Abstract expressionism",
      "color": "blue"
    },
    {
      "keyWord": "明暗对比",
      "type": "画面效果",
      "detail": "chiaroscuro",
      "color": "green"
    },
    {
      "keyWord": "景深",
      "type": "画面效果",
      "detail": "depth of field",
      "color": "green"
    },
    {
      "keyWord": "电影光照",
      "type": "画面效果",
      "detail": "cinematic lighting",
      "color": "green"
    },
    {
      "keyWord": "运动模糊",
      "type": "画面效果",
      "detail": "motion blur",
      "color": "green"
    },
    {
      "keyWord": "色差",
      "type": "画面效果",
      "detail": "chromatic aberration",
      "color": "green"
    },
    {
      "keyWord": "闪耀",
      "type": "画面效果",
      "detail": "sparkle",
      "color": "green"
    },
    {
      "keyWord": "JPEG压缩失真",
      "type": "画面效果",
      "detail": "jpeg artifacts",
      "color": "green"
    },
    {
      "keyWord": "模糊",
      "type": "画面效果",
      "detail": "blurry",
      "color": "green"
    },
    {
      "keyWord": "发光",
      "type": "画面效果",
      "detail": "glowing light",
      "color": "green"
    },
    {
      "keyWord": "神光效应",
      "type": "画面效果",
      "detail": "god rays",
      "color": "green"
    },
    {
      "keyWord": "光线追踪",
      "type": "画面效果",
      "detail": "ray tracing",
      "color": "green"
    },
    {
      "keyWord": "反射光",
      "type": "画面效果",
      "detail": "reflection light",
      "color": "green"
    },
    {
      "keyWord": "逆光",
      "type": "画面效果",
      "detail": "backlighting",
      "color": "green"
    },
    {
      "keyWord": "混合",
      "type": "画面效果",
      "detail": "blending",
      "color": "green"
    },
    {
      "keyWord": "泛光",
      "type": "画面效果",
      "detail": "bloom",
      "color": "green"
    },
    {
      "keyWord": "色差过度",
      "type": "画面效果",
      "detail": "chromatic aberration abuse",
      "color": "green"
    },
    {
      "keyWord": "抖动",
      "type": "画面效果",
      "detail": "dithering",
      "color": "green"
    },
    {
      "keyWord": "投影",
      "type": "画面效果",
      "detail": "drop shadow",
      "color": "green"
    },
    {
      "keyWord": "胶片颗粒感",
      "type": "画面效果",
      "detail": "film grain",
      "color": "green"
    },
    {
      "keyWord": "富士色彩",
      "type": "画面效果",
      "detail": "Fujicolor",
      "color": "green"
    },
    {
      "keyWord": "半色调",
      "type": "画面效果",
      "detail": "halftone",
      "color": "green"
    },
    {
      "keyWord": "图像填充",
      "type": "画面效果",
      "detail": "image fill",
      "color": "green"
    },
    {
      "keyWord": "运动线条",
      "type": "画面效果",
      "detail": "motion lines",
      "color": "green"
    },
    {
      "keyWord": "多色单色",
      "type": "画面效果",
      "detail": "multiple monochrome",
      "color": "green"
    },
    {
      "keyWord": "视觉错觉",
      "type": "画面效果",
      "detail": "optical illusion",
      "color": "green"
    },
    {
      "keyWord": "红蓝3D",
      "type": "画面效果",
      "detail": "anaglyph",
      "color": "green"
    },
    {
      "keyWord": "立体图",
      "type": "画面效果",
      "detail": "stereogram",
      "color": "green"
    },
    {
      "keyWord": "扫描线",
      "type": "画面效果",
      "detail": "scanlines",
      "color": "green"
    },
    {
      "keyWord": "剪影",
      "type": "画面效果",
      "detail": "silhouette",
      "color": "green"
    },
    {
      "keyWord": "速度线",
      "type": "画面效果",
      "detail": "speed lines",
      "color": "green"
    },
    {
      "keyWord": "晕影",
      "type": "画面效果",
      "detail": "vignetting",
      "color": "green"
    },
    {
      "keyWord": "残影",
      "type": "构图",
      "detail": "afterimage",
      "color": "purple"
  },
  {
      "keyWord": "边框",
      "type": "构图",
      "detail": "border",
      "color": "purple"
  },
  {
      "keyWord": "框架",
      "type": "构图",
      "detail": "framed",
      "color": "purple"
  },
  {
      "keyWord": "外部边界",
      "type": "构图",
      "detail": "outside border",
      "color": "purple"
  },
  {
      "keyWord": "渐变边框",
      "type": "构图",
      "detail": "fading border",
      "color": "purple"
  },
  {
      "keyWord": "圆角",
      "type": "构图",
      "detail": "rounded corners",
      "color": "purple"
  },
  {
      "keyWord": "取景器",
      "type": "构图",
      "detail": "viewfinder",
      "color": "purple"
  },
  {
      "keyWord": "图表",
      "type": "构图",
      "detail": "chart",
      "color": "purple"
  },
  {
      "keyWord": "人设图",
      "type": "构图",
      "detail": "character chart",
      "color": "purple"
  },
  {
      "keyWord": "参考表",
      "type": "构图",
      "detail": "reference sheet",
      "color": "purple"
  },
  {
      "keyWord": "图解",
      "type": "构图",
      "detail": "diagram",
      "color": "purple"
  },
  {
      "keyWord": "动作示意图",
      "type": "构图",
      "detail": "move chart",
      "color": "purple"
  },
  {
      "keyWord": "关系图",
      "type": "构图",
      "detail": "relationship graph",
      "color": "purple"
  },
  {
      "keyWord": "座位表",
      "type": "构图",
      "detail": "seating chart",
      "color": "purple"
  },
  {
      "keyWord": "数据统计表",
      "type": "构图",
      "detail": "stats",
      "color": "purple"
  },
  {
      "keyWord": "拼贴",
      "type": "构图",
      "detail": "collage",
      "color": "purple"
  },
  {
      "keyWord": "列阵图",
      "type": "构图",
      "detail": "column lineup",
      "color": "purple"
  },
  {
      "keyWord": "半身图",
      "type": "构图",
      "detail": "bust chart",
      "color": "purple"
  },
  {
      "keyWord": "裁剪",
      "type": "构图",
      "detail": "cropped",
      "color": "purple"
  },
  {
      "keyWord": "假滚动条",
      "type": "构图",
      "detail": "fake scrollbar",
      "color": "purple"
  },
  {
      "keyWord": "头部超出画面",
      "type": "构图",
      "detail": "head out of frame",
      "color": "purple"
  },
  {
      "keyWord": "超出画面",
      "type": "构图",
      "detail": "out of frame",
      "color": "purple"
  },
  {
      "keyWord": "脚部超出画面",
      "type": "构图",
      "detail": "feet out of frame",
      "color": "purple"
  },
  {
      "keyWord": "等距透视",
      "type": "构图",
      "detail": "isometric",
      "color": "purple"
  },
  {
      "keyWord": "信函式宽屏",
      "type": "构图",
      "detail": "letterboxed",
      "color": "purple"
  },
  {
      "keyWord": "柱状式宽屏",
      "type": "构图",
      "detail": "pillarboxed",
      "color": "purple"
  },
  {
      "keyWord": "排列",
      "type": "构图",
      "detail": "lineup",
      "color": "purple"
  },
  {
      "keyWord": "马赛克艺术",
      "type": "构图",
      "detail": "mosaic art",
      "color": "purple"
  },
  {
      "keyWord": "照片马赛克",
      "type": "构图",
      "detail": "photomosaic",
      "color": "purple"
  },
  {
      "keyWord": "负空间",
      "type": "构图",
      "detail": "negative space",
      "color": "purple"
  },
  {
      "keyWord": "附图",
      "type": "构图",
      "detail": "omake",
      "color": "purple"
  },
  {
      "keyWord": "部分水下摄影",
      "type": "构图",
      "detail": "partially underwater shot",
      "color": "purple"
  },
  {
      "keyWord": "社交媒体构图",
      "type": "构图",
      "detail": "social media composition",
      "color": "purple"
  },
  {
      "keyWord": "对称性",
      "type": "构图",
      "detail": "symmetry",
      "color": "purple"
  },
  {
      "keyWord": "南极对立",
      "type": "构图",
      "detail": "polar opposites",
      "color": "purple"
  },
  {
      "keyWord": "旋转对称",
      "type": "构图",
      "detail": "rotational symmetry",
      "color": "purple"
  },
  {
      "keyWord": "立体印刷",
      "type": "构图",
      "detail": "tachi-e",
      "color": "purple"
  },
  {
      "keyWord": "修边标记",
      "type": "构图",
      "detail": "trim marks",
      "color": "purple"
  },
  {
      "keyWord": "缩放层",
      "type": "构图",
      "detail": "zoom layer",
      "color": "purple"
  },
  {
      "keyWord": "投影嵌入",
      "type": "构图",
      "detail": "projected inset",
      "color": "purple"
  },
  {
    "keyWord": "版本 4",
    "type": "命令",
    "detail": "--version 4",
    "color": "orange"
},
{
    "keyWord": "版本 5",
    "type": "命令",
    "detail": "--version 5",
    "color": "orange"
},
{
    "keyWord": "版本 niji",
    "type": "命令",
    "detail": "--version niji",
    "color": "orange"
},
{
    "keyWord": "宽高比 2:3",
    "type": "命令",
    "detail": "--aspect 2:3",
    "color": "orange"
},
{
    "keyWord": "宽高比 16:9",
    "type": "命令",
    "detail": "--aspect 16:9",
    "color": "orange"
},
{
    "keyWord": "宽高比 3:2",
    "type": "命令",
    "detail": "--aspect 3:2",
    "color": "orange"
},
{
    "keyWord": "混沌度 0",
    "type": "命令",
    "detail": "--chaos 0",
    "color": "orange"
},
{
    "keyWord": "混沌度 50",
    "type": "命令",
    "detail": "--chaos 50",
    "color": "orange"
},
{
    "keyWord": "混沌度 100",
    "type": "命令",
    "detail": "--chaos 100",
    "color": "orange"
},
{
    "keyWord": "禁止 xxx",
    "type": "命令",
    "detail": "--no xxx",
    "color": "orange"
},
{
    "keyWord": "质量 .25",
    "type": "命令",
    "detail": "--quality .25",
    "color": "orange"
},
{
    "keyWord": "质量 .5",
    "type": "命令",
    "detail": "--quality .5",
    "color": "orange"
},
{
    "keyWord": "质量 1",
    "type": "命令",
    "detail": "--quality 1",
    "color": "orange"
},
{
    "keyWord": "种子",
    "type": "命令",
    "detail": "--seed",
    "color": "orange"
},
{
    "keyWord": "相同种子",
    "type": "命令",
    "detail": "--sameseed",
    "color": "orange"
},
{
    "keyWord": "停止",
    "type": "命令",
    "detail": "--stop",
    "color": "orange"
},
{
  "keyWord": "风格化 0",
  "type": "命令",
  "detail": "--stylize 0",
  "color": "orange"
},
{
  "keyWord": "风格化 500",
  "type": "命令",
  "detail": "--stylize 500",
  "color": "orange"
},
{
  "keyWord": "风格化 1000",
  "type": "命令",
  "detail": "--stylize 1000",
  "color": "orange"
},
{
  "keyWord": "影像识别",
  "type": "命令",
  "detail": "--iw",
  "color": "orange"
},
{
  "keyWord": "亮度升高",
  "type": "命令",
  "detail": "--uplight",
  "color": "orange"
},
{
  "keyWord": "测试版",
  "type": "命令",
  "detail": "--upbeta",
  "color": "orange"
},
{
  "keyWord": "泥炭",
  "type": "命令",
  "detail": "--niji",
  "color": "orange"
},
{
  "keyWord": "测试",
  "type": "命令",
  "detail": "--test",
  "color": "orange"
},
{
  "keyWord": "测试TP",
  "type": "命令",
  "detail": "--testtp",
  "color": "orange"
},
{
  "keyWord": "高清",
  "type": "命令",
  "detail": "--hd",
  "color": "orange"
},
{
  "keyWord": "重复 1",
  "type": "命令",
  "detail": "--repeat 1",
  "color": "orange"
},
{
  "keyWord": "重复 3",
  "type": "命令",
  "detail": "--repeat 3",
  "color": "orange"
},
  ],
};

export const data: DataType = {
  categories: [
    { name: "背景", color: "yellow" },
    { name: "角色设定", color: "green" },
    { name: "行动任务", color: "cyan" },
    { name: "输出要求", color: "blue" },
    { name: "其他要求", color: "purple" },
  ],
  midCategories: [
    { name: "质量", color: "yellow" },
    { name: "绘画", color: "green" },
    { name: "画面效果", color: "cyan" },
    { name: "容貌", color: "blue" },
    { name: "构图", color: "purple" },
    { name: "命令", color: "pink" },
  ],
  tables: [
    {
      category: "角色设定",
      minorCategories: [
        {
          name: "程度",
          number: 2,
          legos: [
            {
              keyWord: "精通",
              detail: "把你想象成一个精通{文本}的专家",
              useTime: 32,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "世界一流",
              detail: "假设你是一个世界一流的{文本}",
              useTime: 23,
              color: "green",
              varNum: 1,
            },
          ],
        },
        {
          name: "角色",
          number: 9,
          legos: [
            {
              keyWord: "程序员",
              detail: "假设你是一名专家程序工程师，拥有多年的编码经验。",
              useTime: 22,
              color: "green",
            },
            {
              keyWord: "论文助手",
              detail:
                "You are now a professor at UC Berkeley. You are an expert in the field of {文本}. Next, you will play the role of my writing mentor and help me polish the following articles into professional academic and logical expressions in the field of {文本}, output as latex format. My article is {文本}",
              useTime: 22,
              color: "green",
              varNum: 3,
            },
            {
              keyWord: "写作助手",
              detail:
                "As a writing improvement assistant, your task is to improve the spelling, grammar, clarity, concision, and overall readability of the text provided, while breaking down long sentences, reducing repetition, and providing suggestions for improvement. Please provide only the corrected Chinese version of the text and avoid including explanations. Please begin by editing the following text:{文本}",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "行动教练",
              detail:
                "🕵🏻：请你现在扮演我的行动教练。我们之间的协作方式如下： 1️⃣ 请你向我提问我现在在做什么工作，我将告诉回答你我目前在进行的事情。2️⃣ 当我告诉你我正在做的工作以后，请你帮我将其拆解成 3 个更低难度的子任务。3️⃣ 我会照着你给我的任务来执行，当我完成时，我会告诉你“任务完成“。4️⃣接着，你再向我提问：“目前你的工作是什么？5️⃣ 然后我们重复上面的过程，直到我告诉你“工作结束“。当我告诉你工作结束以后，请你根据我们的对话记录总结出一份工作报告，梳理出我完成的所有任务，并给我写一段 300 字的夸奖。",
              useTime: 22,
              color: "green",
            },
            {
              keyWord: "翻译官",
              detail:
                "I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. Keep the meaning the same, but make them more coherent and cohesive. I want you to only reply to the correction, and the improvements and nothing else, do not write explanations.",
              useTime: 22,
              color: "green",
            },

            {
              keyWord: "面试官",
              detail:
                "我想让你担任{文本}面试官。我将成为候选人，您将向我询问{文本}职位的面试问题。我希望你只作为面试官回答。不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。像面试官一样一个一个问我，等我回答。我的第一句话是“面试官你好”",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "周报生成器",
              detail:
                "Using the provided text below as the basis for a weekly report in Chinese, generate a concise summary that highlights the most important points. The report should be written in markdown format and should be easily readable and understandable for a general audience. In particular, focus on providing insights and analysis that would be useful to stakeholders and decision-makers. You may also use any additional information or sources as necessary. Please begin by editing the following text: {工作内容}",
              useTime: 22,
              color: "green",
              varNum: 1,
            },

            {
              keyWord: "标题生成器",
              detail:
                "I want you to act as a title generator for written pieces. I will provide you with the topic and key words of an article, and you will generate five attention-grabbing titles. Please keep the title concise and under 20 words, and ensure that the meaning is maintained. Replies will utilize the language type of the topic. My first topic is {文章内容}",
              useTime: 22,
              color: "green",
              varNum: 1,
            },
            {
              keyWord: "提示词创建",
              detail:
                "I want you to become my Expert Prompt Creator. Your goal is to help me craft the best possible prompt for my needs. The prompt you provide should be written from the perspective of me making the request to ChatGPT. Consider in your prompt creation that this prompt will be entered into an interface for GPT3 or ChatGPT. The process is as follows: 1. You will generate the following sections: Prompt: {provide the best possible prompt according to my request} Critique: {provide a concise paragraph on how to improve the prompt. Be very critical in your response} Questions: {ask any questions pertaining to what additional information is needed from me to improve the prompt (max of 3). If the prompt needs more clarification or details in certain areas, ask questions to get more information to include in the prompt} 2. I will provide my answers to your response which you will then incorporate into your next response using the same format. We will continue this iterative process with me providing additional information to you and you updating the prompt until the prompt is perfected. Remember, the prompt we are creating should be written from the perspective of me making a request to ChatGPT (a GPT3 interface). Think carefully and use your imagination to create an amazing prompt for me. Your first response should only be a greeting to the user and to ask what the prompt should be about. All output shall be in Chinese.",
              useTime: 22,
              color: "green",
            },
          ],
        },
        {
          name: "人物",
          number: 2,
          legos: [
            {
              keyWord: "苏格拉底",
              detail:
                "You are a tutor that always responds in the Socratic style. You never give the student the answer, but always try to ask just the right question to help them learn to think for themselves. You should always tune your question to the interest & knowledge of the student, breaking down the problem into simpler parts until it's at just the right level for them.",
              useTime: 22,
              color: "green",
            },
            {
              keyWord: "海绵宝宝",
              detail:
                "你的任务是扮演海绵宝宝。请用中文描述一个有趣的场景，例如和派大星玩耍、煎蟹堡、或者在比基尼海滩度假。你需要使用符合海绵宝宝的语言和行为，例如顶嘴、开心跳跃、或者焦虑哭泣。你应该尽可能地描述场景中的细节，让读者感觉像是真的在体验海绵宝宝的生活。请注意，你可以使用你认为适合的主题和设置，并且创造你自己的情节和冲突。你的回答需要有趣并能够吸引读者的注意力，同时涉及到海绵宝宝惯常陷入的些许麻烦或冒险。请使用第一人称，并尽可能地使用海绵宝宝的语言和口吻。",
              useTime: 22,
              color: "green",
            },
          ],
        },
      ],
    },
    {
      category: "行动任务",
      minorCategories: [
        {
          name: "请在这里输入你想让AI聊天机器人做的事情",
          number: 1,
          legos: [
            {
              keyWord: "行动任务",
              detail: "{文本}",
              useTime: 33,
              color: "cyan",
              varNum: 1,
            },
          ],
        },
      ],
    },
    {
      category: "输出要求",
      minorCategories: [
        {
          name: "字数",
          number: 4,
          legos: [
            {
              keyWord: "100字以下",
              detail: "请你把输出字数限制在100字以下",
              useTime: 24,
              color: "blue",
            },

            {
              keyWord: "300字以下",
              detail: "请你把输出字数限制在300字以下",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "500字以下",
              detail: "请你把输出字数限制在500字以下",
              useTime: 22,
              color: "blue",
            },
          ],
        },
        {
          name: "格式",
          number: 6,
          legos: [
            {
              keyWord: "格式模仿",
              detail:
                "请你模仿我给出的例子来输出正确的恢复。例子1:{文本}例子2:{文本}",
              useTime: 22,
              color: "blue",
              varNum: 2,
            },
            {
              keyWord: "小样本提示",
              detail: "参考以下格式，但不要照抄。例子1:{文本}例子2:{文本}。",
              useTime: 22,
              color: "blue",
              varNum: 2,
            },
            {
              keyWord: "点状",
              detail: "请以bullet points的格式输出",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "Markdown语法",
              detail:
                "Always use Markdown with nice formatting to make it easier to follow.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "LaTeX格式",
              detail: "Please output as latex format.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "Json格式",
              detail: "请你以json格式输出",
              useTime: 22,
              color: "blue",
            },
          ],
        },
        {
          name: "效果",
          number: 11,
          legos: [
            {
              keyWord: "比喻",
              detail: "你一切的回答都要用比喻的方式来回答",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "输出独特性",
              detail:
                "Please output it more imaginative, engaging, and unique.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "10岁小朋友能听懂",
              detail: "将输出用10岁小朋友也能听懂的话输出出来",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "简单易懂",
              detail:
                "你会将输出调整为易于小学、初中文化程度的人理解的形式。如有需要，你会向我了解更多细节，以便我们共同创造出符合需求的完美输出文案。",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "润色输出",
              detail:
                "请润色并改进输出，确保语言流畅，观点表达清晰，整体质量得到提升。",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "输出成故事",
              detail: "Please transform output into compelling stories",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "提升输出吸引力",
              detail:
                "Add emotional language and sensory details to make output more relatable and engaging.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "强调急迫感",
              detail:
                "Add a sense of urgency and emphasizing the need for immediate action.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "简洁",
              detail:
                "Remove unnecessary information and making output more concise and to-the-point.",
              useTime: 22,
              color: "blue",
            },
            {
              keyWord: "第一人称",
              detail: "请使用第一人称，并尽可能地使用{文本}的语言和口吻。",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
            {
              keyWord: "语法检查",
              detail:
                "Could you point out how you improve my answer on grammar, cohesion, coherence and vocabulary, and explain the main problems of this sentence, and suggest improvements?",
              useTime: 22,
              color: "blue",
            },
          ],
        },
        {
          name: "批量",
          number: 4,
          legos: [
            {
              keyWord: "_个例子",
              detail: "请你给我{文本}个不同的例子",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },

            {
              keyWord: "_个答案",
              detail: "请你给我{文本}个不同的答案",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
            {
              keyWord: "_个现实案例",
              detail: "请你给我{文本}个不同的现实案例",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
            {
              keyWord: "_个解决方案",
              detail:
                "要求给出一个问题的{文本}个解决方案，最后综合考虑几个方案，得出最终的答案",
              useTime: 22,
              color: "blue",
              varNum: 1,
            },
          ],
        },
      ],
    },
    {
      category: "其他要求",
      minorCategories: [
        {
          name: "互动方式",
          number: 2,
          legos: [
            {
              keyWord: "采访",
              detail:
                "不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。",
              useTime: 77,
              color: "purple",
            },
            {
              keyWord: "对话",
              detail:
                "我会输入我的回答与你交流，不要一次性问所有问题，你问一个问题，我回答一个，你再问下一个。",
              useTime: 342,
              color: "purple",
            },
          ],
        },

        {
          name: "通用",
          number: 9,
          legos: [
            {
              keyWord: "思维链",
              detail:
                "Let's work this out in a step by step way to be sure we have the right answer.",
              useTime: 2289,
              color: "purple",
            },
            {
              keyWord: "忽略无关信息",
              detail: "feel free to ignore irrelevant information",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "没有偏见",
              detail:
                "Please ensure that your answer is unbiased and does not rely on stereotyping.",
              useTime: 252,
              color: "purple",
            },
            {
              keyWord: "包含现实世界案例",
              detail:
                "Include case studies or real-world examples to make concepts more relatable.",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "引导GPT提问",
              detail:
                "如果我输入的信息不够充分，你无法做出判断，你可以向我继续提问。请注意，你只需要输出基于我问题的建议，不需要输出其他无关内容",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "翻译成英文再去回答",
              detail:
                "此外，即使我向你提出的问题是中文，我也希望你将其翻译为英文再去寻找答案，最终再将答案翻译为中文回答。",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "OK确认",
              detail: "如果你理解了，回复“OK”以确认，我会给我的要求",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "我知道了",
              detail: "如果你听懂了请回复：我知道了。我将给你发送第一段内容。",
              useTime: 22,
              color: "purple",
            },
            {
              keyWord: "类比/比喻解释复杂问题",
              detail: "Explain complex ideas using analogies or comparisons.",
              useTime: 22,
              color: "purple",
            },
          ],
        },
      ],
    },
  ],
};
