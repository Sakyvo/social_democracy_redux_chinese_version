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
| #2 Part 1 | 主菜单入口 + qdisplays + 小工具场景 + 模组信息 + 制作人员（`root` 文本、`main`、`return`、`cancel_advisor_action`、`easy_discard`、`set_next_election_time`、`1930_root`/`1925_root` 标题、`qdisplays/*`（10 个全）、`mod_info`、`credits`） | ✅ 完成 |
| #2 Part 2 | `library`（资料库正文 ~543 行）+ `status`（左侧状态面板 ~215 行）+ `election_simulation`/`election_algorithm` | ✅ 完成 |
| #2 Part 3 | `game_over`（结局分支 ~658 行）+ `post_event`（2195 行，大型事件后处理） | ✅ 完成（Part 3a game_over + Part 3b post_event；post_event 全文 2195 行几乎全为 JS 逻辑，实际玩家可见文本仅两处） |
| #3 | 年度事件（`events/1926.dry` ~ `events/1936.dry`） | ✅ 完成 |
| #4 | 顾问（`advisors/`） | ✅ 完成 |
| #5 | 党务（`party_affairs/`） | ✅ 完成（22 个文件全部翻译；Part 1 + Part 2a + Part 2b） |
| #6 | 政务（`government_affairs/`） | ✅ 完成（32 个文件全部翻译；Part 1 legislative_menu + Part 2 4 大文件 + Part 3 27 个剩余文件） |
| #7 | 总统事务（`presidential_affairs/`） | ⏳ 待做 |
| #8 | 杂项事件（`events/` 非年度部分） | ⏳ 待做 |
| #9 | 校对 + 术语一致性扫描 + 最终构建验证 | ⏳ 待做 |

## 翻译约束
见 [`TERMINOLOGY.md`](./TERMINOLOGY.md) §九 翻译风格约定。
