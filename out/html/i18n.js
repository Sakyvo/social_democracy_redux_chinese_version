// i18n loader for Social Democracy: An Alternate History
// 中英双语加载器
(function () {
  var LANG_KEY = 'sdah_lang';
  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  var lang = (saved === 'en' || saved === 'zh') ? saved : 'zh';
  window.SDAH_LANG = lang;

  // 静态 HTML 文本翻译字典
  var STRINGS = {
    zh: {
      title: '社会民主主义：架空历史',
      author: 'Autumn Chen',
      library: '资料库',
      save_load: '存档/读档',
      options: '设置',
      tab_main: '主要',
      tab_politics: '政治',
      tab_defense: '国防',
      tab_polls: '民调',
      enable_backgrounds: '启用背景图',
      disable_backgrounds: '禁用背景图',
      enable_animation: '启用动画',
      disable_animation: '禁用动画',
      music_on: '开启音乐',
      music_off: '关闭音乐',
      language: '语言',
      lang_zh: '中文',
      lang_en: 'English',
      close: '关闭',
      save: '保存',
      delete: '删除',
      export: '导出',
      import_save: '导入存档：',
      auto: '自动',
      page_title: '社会民主主义：架空历史 - Autumn Chen'
    },
    en: {
      title: 'Social Democracy: An Alternate History',
      author: 'Autumn Chen',
      library: 'Library',
      save_load: 'Save/Load',
      options: 'Options',
      tab_main: 'Main',
      tab_politics: 'Politics',
      tab_defense: 'Defense',
      tab_polls: 'Polls',
      enable_backgrounds: 'Enable backgrounds',
      disable_backgrounds: 'Disable backgrounds',
      enable_animation: 'Enable animation',
      disable_animation: 'Disable animation',
      music_on: 'Music on',
      music_off: 'Music off',
      language: 'Language',
      lang_zh: '中文',
      lang_en: 'English',
      close: 'Close',
      save: 'Save',
      delete: 'Delete',
      export: 'Export',
      import_save: 'Import save file:',
      auto: 'Auto',
      page_title: 'Social Democracy: An Alternate History - Autumn Chen'
    }
  };

  window.SDAH_T = STRINGS[lang];

  // 根据语言选择动态加载对应 game.js
  window.SDAH_GAME_SCRIPT = (lang === 'zh') ? 'game.zh.js' : 'game.js';

  // 暴露切换函数
  window.setLanguage = function (newLang) {
    if (newLang !== 'en' && newLang !== 'zh') return;
    try { localStorage.setItem(LANG_KEY, newLang); } catch (e) {}
    location.reload();
  };

  // DOM 就绪后替换静态 UI 文本
  function applyStaticI18n() {
    var T = window.SDAH_T;
    document.title = T.page_title;
    var map = [
      ['#sdah-header-title', T.title],
      ['#sdah-header-author', T.author],
      ['#stats-link', T.library],
      ['#sdah-save-link', T.save_load],
      ['#sdah-options-link', T.options],
      ['#main_tab', T.tab_main],
      ['#politics_tab', T.tab_politics],
      ['#paramilitary_tab', T.tab_defense],
      ['#poll_tab', T.tab_polls],
      ['label[for=backgrounds_yes]', T.enable_backgrounds],
      ['label[for=backgrounds_no]', T.disable_backgrounds],
      ['label[for=animate_yes]', T.enable_animation],
      ['label[for=animate_no]', T.disable_animation],
      ['label[for=audio_yes]', T.music_on],
      ['label[for=audio_no]', T.music_off],
      ['label[for=import_save]', T.import_save],
      ['#sdah-close-options', T.close],
      ['#sdah-close-saves', T.close]
    ];
    for (var i = 0; i < map.length; i++) {
      var el = document.querySelector(map[i][0]);
      if (el) el.textContent = map[i][1];
    }
    // 存档按钮
    var btns = document.querySelectorAll('.save_button');
    for (var j = 0; j < btns.length; j++) btns[j].textContent = T.save;
    var dels = document.querySelectorAll('.delete_button');
    for (var k = 0; k < dels.length; k++) dels[k].textContent = T.delete;
    var exps = document.querySelectorAll('.export_button');
    for (var l = 0; l < exps.length; l++) exps[l].textContent = T.export;

    // 语言单选按钮当前状态
    var zhRadio = document.getElementById('lang_zh_radio');
    var enRadio = document.getElementById('lang_en_radio');
    if (zhRadio && enRadio) {
      zhRadio.checked = (lang === 'zh');
      enRadio.checked = (lang === 'en');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyStaticI18n);
  } else {
    applyStaticI18n();
  }
})();
