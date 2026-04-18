# 中文化进度 / Translation Progress

## 项目架构
- `source/`：英文原版剧本（**不改动**）
- `source_zh/`：中文版剧本（翻译在此进行）
- `out/html/game.js`：英文构建产物
- `out/html/game.zh.js`：中文构建产物
- `out/html/i18n.js`：静态 UI 文案字典 + 语言切换逻辑
- `out/html/index.html`：**默认加载中文**；顶部「设置 / Options」弹窗底部可切换中/英；`localStorage['sdah_lang']` 记忆选择

## 构建
```
# 英文构建
npx dendrynexus make-html

# 中文构建（会临时把 source_zh 换入 source，再恢复）
./build-zh.sh       # Linux/Mac/Git Bash
build-zh.cmd        # Windows
```

首次克隆后如尚未翻译剧本，`game.zh.js` 为 `game.js` 的副本（仅 UI 外壳代码是中文，剧本正文仍是英文），不影响框架测试。

## 批次规划

| 批次 | 范围 | 状态 |
|---|---|---|
| #1 | 框架搭建 + UI 固定文案 + TERMINOLOGY.md | ✅ 完成 |
| #2 | 根场景（`root`, `main`, `1928_root`, `1930_root`, `1925_root`, `credits`, `mod_info`, `game_over`, `return`, `post_event`, `start_menu`, `status`, `library`, `election_simulation` 等） | ⏳ 待做 |
| #3 | 年度事件（`events/1926.dry` ~ `events/1936.dry`） | ⏳ 待做 |
| #4 | 顾问（`advisors/`） | ⏳ 待做 |
| #5 | 党务（`party_affairs/`） | ⏳ 待做 |
| #6 | 政务（`government_affairs/`） | ⏳ 待做 |
| #7 | 总统事务（`presidential_affairs/`） | ⏳ 待做 |
| #8 | 杂项事件（`events/` 非年度部分） | ⏳ 待做 |
| #9 | qdisplays（面板显示） | ⏳ 待做 |
| #10 | 校对 + 术语一致性扫描 + 最终构建验证 | ⏳ 待做 |

## 翻译约束
见 [`TERMINOLOGY.md`](./TERMINOLOGY.md) §九 翻译风格约定。
