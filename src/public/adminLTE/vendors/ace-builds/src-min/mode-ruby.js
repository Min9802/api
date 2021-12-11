define(
  'ace/mode/ruby_highlight_rules',
  [
    'require',
    'exports',
    'module',
    'ace/lib/oop',
    'ace/mode/text_highlight_rules',
  ],
  function (e, t, n) {
    'use strict';
    var r = e('../lib/oop'),
      i = e('./text_highlight_rules').TextHighlightRules,
      s = (t.constantOtherSymbol = {
        token: 'constant.other.symbol.ruby',
        regex: '[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?',
      });
    (t.qString = {
      token: 'string',
      regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
    }),
      (t.qqString = {
        token: 'string',
        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',
      }),
      (t.tString = {
        token: 'string',
        regex: "[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]",
      });
    var o = (t.constantNumericHex = {
        token: 'constant.numeric',
        regex: '0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b',
      }),
      u = (t.constantNumericBinary = {
        token: 'constant.numeric',
        regex: /\b(0[bB][01](?:[01]|_(?=[01]))*)\b/,
      }),
      a = (t.constantNumericDecimal = {
        token: 'constant.numeric',
        regex: /\b(0[dD](?:[1-9](?:[\d]|_(?=[\d]))*|0))\b/,
      }),
      f = (t.constantNumericDecimal = {
        token: 'constant.numeric',
        regex: /\b(0[oO]?(?:[1-7](?:[0-7]|_(?=[0-7]))*|0))\b/,
      }),
      l = (t.constantNumericRational = {
        token: 'constant.numeric',
        regex: /\b([\d]+(?:[./][\d]+)?ri?)\b/,
      }),
      c = (t.constantNumericComplex = {
        token: 'constant.numeric',
        regex: /\b([\d]i)\b/,
      }),
      h = (t.constantNumericFloat = {
        token: 'constant.numeric',
        regex:
          '[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?i?\\b',
      }),
      p = (t.instanceVariable = {
        token: 'variable.instance',
        regex: '@{1,2}[a-zA-Z_\\d]+',
      }),
      d = function () {
        var e =
            'abort|Array|assert|assert_equal|assert_not_equal|assert_same|assert_not_same|assert_nil|assert_not_nil|assert_match|assert_no_match|assert_in_delta|assert_throws|assert_raise|assert_nothing_raised|assert_instance_of|assert_kind_of|assert_respond_to|assert_operator|assert_send|assert_difference|assert_no_difference|assert_recognizes|assert_generates|assert_response|assert_redirected_to|assert_template|assert_select|assert_select_email|assert_select_rjs|assert_select_encoded|css_select|at_exit|attr|attr_writer|attr_reader|attr_accessor|attr_accessible|autoload|binding|block_given?|callcc|caller|catch|chomp|chomp!|chop|chop!|defined?|delete_via_redirect|eval|exec|exit|exit!|fail|Float|flunk|follow_redirect!|fork|form_for|form_tag|format|gets|global_variables|gsub|gsub!|get_via_redirect|host!|https?|https!|include|Integer|lambda|link_to|link_to_unless_current|link_to_function|link_to_remote|load|local_variables|loop|open|open_session|p|print|printf|proc|putc|puts|post_via_redirect|put_via_redirect|raise|rand|raw|readline|readlines|redirect?|request_via_redirect|require|scan|select|set_trace_func|sleep|split|sprintf|srand|String|stylesheet_link_tag|syscall|system|sub|sub!|test|throw|trace_var|trap|untrace_var|atan2|cos|exp|frexp|ldexp|log|log10|sin|sqrt|tan|render|javascript_include_tag|csrf_meta_tag|label_tag|text_field_tag|submit_tag|check_box_tag|content_tag|radio_button_tag|text_area_tag|password_field_tag|hidden_field_tag|fields_for|select_tag|options_for_select|options_from_collection_for_select|collection_select|time_zone_select|select_date|select_time|select_datetime|date_select|time_select|datetime_select|select_year|select_month|select_day|select_hour|select_minute|select_second|file_field_tag|file_field|respond_to|skip_before_filter|around_filter|after_filter|verify|protect_from_forgery|rescue_from|helper_method|redirect_to|before_filter|send_data|send_file|validates_presence_of|validates_uniqueness_of|validates_length_of|validates_format_of|validates_acceptance_of|validates_associated|validates_exclusion_of|validates_inclusion_of|validates_numericality_of|validates_with|validates_each|authenticate_or_request_with_http_basic|authenticate_or_request_with_http_digest|filter_parameter_logging|match|get|post|resources|redirect|scope|assert_routing|translate|localize|extract_locale_from_tld|caches_page|expire_page|caches_action|expire_action|cache|expire_fragment|expire_cache_for|observe|cache_sweeper|has_many|has_one|belongs_to|has_and_belongs_to_many|p|warn|refine|using|module_function|extend|alias_method|private_class_method|remove_method|undef_method',
          t =
            'alias|and|BEGIN|begin|break|case|class|def|defined|do|else|elsif|END|end|ensure|__FILE__|finally|for|gem|if|in|__LINE__|module|next|not|or|private|protected|public|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|__ENCODING__|prepend',
          n =
            'true|TRUE|false|FALSE|nil|NIL|ARGF|ARGV|DATA|ENV|RUBY_PLATFORM|RUBY_RELEASE_DATE|RUBY_VERSION|STDERR|STDIN|STDOUT|TOPLEVEL_BINDING|RUBY_PATCHLEVEL|RUBY_REVISION|RUBY_COPYRIGHT|RUBY_ENGINE|RUBY_ENGINE_VERSION|RUBY_DESCRIPTION',
          r =
            '$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|$!|root_url|flash|session|cookies|params|request|response|logger|self',
          i = (this.$keywords = this.createKeywordMapper(
            {
              keyword: t,
              'constant.language': n,
              'variable.language': r,
              'support.function': e,
              'invalid.deprecated': 'debugger',
            },
            'identifier',
          )),
          d =
            '\\\\(?:n(?:[1-7][0-7]{0,2}|0)|[nsrtvfbae\'"\\\\]|c(?:\\\\M-)?.|M-(?:\\\\C-|\\\\c)?.|C-(?:\\\\M-)?.|[0-7]{3}|x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|u{[\\da-fA-F]{1,6}(?:\\s[\\da-fA-F]{1,6})*})',
          v = {
            '(': ')',
            '[': ']',
            '{': '}',
            '<': '>',
            '^': '^',
            '|': '|',
            '%': '%',
          };
        (this.$rules = {
          start: [
            { token: 'comment', regex: '#.*$' },
            {
              token: 'comment.multiline',
              regex: '^=begin(?=$|\\s.*$)',
              next: 'comment',
            },
            { token: 'string.regexp', regex: /[/](?=.*\/)/, next: 'regex' },
            [
              {
                token: ['constant.other.symbol.ruby', 'string.start'],
                regex: /(:)?(")/,
                push: [
                  { token: 'constant.language.escape', regex: d },
                  { token: 'paren.start', regex: /#{/, push: 'start' },
                  { token: 'string.end', regex: /"/, next: 'pop' },
                  { defaultToken: 'string' },
                ],
              },
              {
                token: 'string.start',
                regex: /`/,
                push: [
                  { token: 'constant.language.escape', regex: d },
                  { token: 'paren.start', regex: /#{/, push: 'start' },
                  { token: 'string.end', regex: /`/, next: 'pop' },
                  { defaultToken: 'string' },
                ],
              },
              {
                token: ['constant.other.symbol.ruby', 'string.start'],
                regex: /(:)?(')/,
                push: [
                  { token: 'constant.language.escape', regex: /\\['\\]/ },
                  { token: 'string.end', regex: /'/, next: 'pop' },
                  { defaultToken: 'string' },
                ],
              },
              {
                token: 'string.start',
                regex: /%[qwx]([(\[<{^|%])/,
                onMatch: function (e, t, n) {
                  n.length && (n = []);
                  var r = e[e.length - 1];
                  return (
                    n.unshift(r, t),
                    (this.next = 'qStateWithoutInterpolation'),
                    this.token
                  );
                },
              },
              {
                token: 'string.start',
                regex: /%[QWX]?([(\[<{^|%])/,
                onMatch: function (e, t, n) {
                  n.length && (n = []);
                  var r = e[e.length - 1];
                  return (
                    n.unshift(r, t),
                    (this.next = 'qStateWithInterpolation'),
                    this.token
                  );
                },
              },
              {
                token: 'constant.other.symbol.ruby',
                regex: /%[si]([(\[<{^|%])/,
                onMatch: function (e, t, n) {
                  n.length && (n = []);
                  var r = e[e.length - 1];
                  return (
                    n.unshift(r, t),
                    (this.next = 'sStateWithoutInterpolation'),
                    this.token
                  );
                },
              },
              {
                token: 'constant.other.symbol.ruby',
                regex: /%[SI]([(\[<{^|%])/,
                onMatch: function (e, t, n) {
                  n.length && (n = []);
                  var r = e[e.length - 1];
                  return (
                    n.unshift(r, t),
                    (this.next = 'sStateWithInterpolation'),
                    this.token
                  );
                },
              },
              {
                token: 'string.regexp',
                regex: /%[r]([(\[<{^|%])/,
                onMatch: function (e, t, n) {
                  n.length && (n = []);
                  var r = e[e.length - 1];
                  return n.unshift(r, t), (this.next = 'rState'), this.token;
                },
              },
            ],
            { token: 'punctuation', regex: '::' },
            p,
            { token: 'variable.global', regex: '[$][a-zA-Z_\\d]+' },
            { token: 'support.class', regex: '[A-Z][a-zA-Z_\\d]*' },
            {
              token: ['punctuation.operator', 'support.function'],
              regex: /(\.)([a-zA-Z_\d]+)(?=\()/,
            },
            {
              token: ['punctuation.operator', 'identifier'],
              regex: /(\.)([a-zA-Z_][a-zA-Z_\d]*)/,
            },
            { token: 'string.character', regex: '\\B\\?(?:' + d + '|\\S)' },
            { token: 'punctuation.operator', regex: /\?(?=.+:)/ },
            l,
            c,
            s,
            o,
            h,
            u,
            a,
            f,
            { token: 'constant.language.boolean', regex: '(?:true|false)\\b' },
            { token: i, regex: '[a-zA-Z_$][a-zA-Z0-9_$]*\\b' },
            { token: 'punctuation.separator.key-value', regex: '=>' },
            {
              stateName: 'heredoc',
              onMatch: function (e, t, n) {
                var r =
                    e[2] == '-' || e[2] == '~' ? 'indentedHeredoc' : 'heredoc',
                  i = e.split(this.splitRegex);
                return (
                  n.push(r, i[3]),
                  [
                    { type: 'constant', value: i[1] },
                    { type: 'string', value: i[2] },
                    { type: 'support.class', value: i[3] },
                    { type: 'string', value: i[4] },
                  ]
                );
              },
              regex: '(<<[-~]?)([\'"`]?)([\\w]+)([\'"`]?)',
              rules: {
                heredoc: [
                  {
                    onMatch: function (e, t, n) {
                      return e === n[1]
                        ? (n.shift(),
                          n.shift(),
                          (this.next = n[0] || 'start'),
                          'support.class')
                        : ((this.next = ''), 'string');
                    },
                    regex: '.*$',
                    next: 'start',
                  },
                ],
                indentedHeredoc: [
                  { token: 'string', regex: '^ +' },
                  {
                    onMatch: function (e, t, n) {
                      return e === n[1]
                        ? (n.shift(),
                          n.shift(),
                          (this.next = n[0] || 'start'),
                          'support.class')
                        : ((this.next = ''), 'string');
                    },
                    regex: '.*$',
                    next: 'start',
                  },
                ],
              },
            },
            {
              regex: '$',
              token: 'empty',
              next: function (e, t) {
                return t[0] === 'heredoc' || t[0] === 'indentedHeredoc'
                  ? t[0]
                  : e;
              },
            },
            {
              token: 'keyword.operator',
              regex:
                '!|\\$|%|&|\\*|/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\||\\b(?:in|instanceof|new|delete|typeof|void)',
            },
            { token: 'paren.lparen', regex: '[[({]' },
            {
              token: 'paren.rparen',
              regex: '[\\])}]',
              onMatch: function (e, t, n) {
                return (
                  (this.next = ''),
                  e == '}' &&
                    n.length > 1 &&
                    n[1] != 'start' &&
                    (n.shift(), (this.next = n.shift())),
                  this.token
                );
              },
            },
            { token: 'text', regex: '\\s+' },
            { token: 'punctuation.operator', regex: /[?:,;.]/ },
          ],
          comment: [
            {
              token: 'comment.multiline',
              regex: '^=end(?=$|\\s.*$)',
              next: 'start',
            },
            { token: 'comment', regex: '.+' },
          ],
          qStateWithInterpolation: [
            {
              token: 'string.start',
              regex: /[(\[<{]/,
              onMatch: function (e, t, n) {
                return n.length && e === n[0]
                  ? (n.unshift(e, t), this.token)
                  : 'string';
              },
            },
            { token: 'constant.language.escape', regex: d },
            { token: 'constant.language.escape', regex: /\\./ },
            { token: 'paren.start', regex: /#{/, push: 'start' },
            {
              token: 'string.end',
              regex: /[)\]>}^|%]/,
              onMatch: function (e, t, n) {
                return n.length && e === v[n[0]]
                  ? (n.shift(), (this.next = n.shift()), this.token)
                  : ((this.next = ''), 'string');
              },
            },
            { defaultToken: 'string' },
          ],
          qStateWithoutInterpolation: [
            {
              token: 'string.start',
              regex: /[(\[<{]/,
              onMatch: function (e, t, n) {
                return n.length && e === n[0]
                  ? (n.unshift(e, t), this.token)
                  : 'string';
              },
            },
            { token: 'constant.language.escape', regex: /\\['\\]/ },
            { token: 'constant.language.escape', regex: /\\./ },
            {
              token: 'string.end',
              regex: /[)\]>}^|%]/,
              onMatch: function (e, t, n) {
                return n.length && e === v[n[0]]
                  ? (n.shift(), (this.next = n.shift()), this.token)
                  : ((this.next = ''), 'string');
              },
            },
            { defaultToken: 'string' },
          ],
          sStateWithoutInterpolation: [
            {
              token: 'constant.other.symbol.ruby',
              regex: /[(\[<{]/,
              onMatch: function (e, t, n) {
                return n.length && e === n[0]
                  ? (n.unshift(e, t), this.token)
                  : 'constant.other.symbol.ruby';
              },
            },
            {
              token: 'constant.other.symbol.ruby',
              regex: /[)\]>}^|%]/,
              onMatch: function (e, t, n) {
                return n.length && e === v[n[0]]
                  ? (n.shift(), (this.next = n.shift()), this.token)
                  : ((this.next = ''), 'constant.other.symbol.ruby');
              },
            },
            { defaultToken: 'constant.other.symbol.ruby' },
          ],
          sStateWithInterpolation: [
            {
              token: 'constant.other.symbol.ruby',
              regex: /[(\[<{]/,
              onMatch: function (e, t, n) {
                return n.length && e === n[0]
                  ? (n.unshift(e, t), this.token)
                  : 'constant.other.symbol.ruby';
              },
            },
            { token: 'constant.language.escape', regex: d },
            { token: 'constant.language.escape', regex: /\\./ },
            { token: 'paren.start', regex: /#{/, push: 'start' },
            {
              token: 'constant.other.symbol.ruby',
              regex: /[)\]>}^|%]/,
              onMatch: function (e, t, n) {
                return n.length && e === v[n[0]]
                  ? (n.shift(), (this.next = n.shift()), this.token)
                  : ((this.next = ''), 'constant.other.symbol.ruby');
              },
            },
            { defaultToken: 'constant.other.symbol.ruby' },
          ],
          rState: [
            {
              token: 'string.regexp',
              regex: /[(\[<{]/,
              onMatch: function (e, t, n) {
                return n.length && e === n[0]
                  ? (n.unshift(e, t), this.token)
                  : 'constant.language.escape';
              },
            },
            { token: 'paren.start', regex: /#{/, push: 'start' },
            { token: 'string.regexp', regex: /\// },
            {
              token: 'string.regexp',
              regex: /[)\]>}^|%][imxouesn]*/,
              onMatch: function (e, t, n) {
                return n.length && e[0] === v[n[0]]
                  ? (n.shift(), (this.next = n.shift()), this.token)
                  : ((this.next = ''), 'constant.language.escape');
              },
            },
            { include: 'regex' },
            { defaultToken: 'string.regexp' },
          ],
          regex: [
            { token: 'regexp.keyword', regex: /\\[wWdDhHsS]/ },
            { token: 'constant.language.escape', regex: /\\[AGbBzZ]/ },
            { token: 'constant.language.escape', regex: /\\g<[a-zA-Z0-9]*>/ },
            {
              token: [
                'constant.language.escape',
                'regexp.keyword',
                'constant.language.escape',
              ],
              regex:
                /(\\p{\^?)(Alnum|Alpha|Blank|Cntrl|Digit|Graph|Lower|Print|Punct|Space|Upper|XDigit|Word|ASCII|Any|Assigned|Arabic|Armenian|Balinese|Bengali|Bopomofo|Braille|Buginese|Buhid|Canadian_Aboriginal|Carian|Cham|Cherokee|Common|Coptic|Cuneiform|Cypriot|Cyrillic|Deseret|Devanagari|Ethiopic|Georgian|Glagolitic|Gothic|Greek|Gujarati|Gurmukhi|Han|Hangul|Hanunoo|Hebrew|Hiragana|Inherited|Kannada|Katakana|Kayah_Li|Kharoshthi|Khmer|Lao|Latin|Lepcha|Limbu|Linear_B|Lycian|Lydian|Malayalam|Mongolian|Myanmar|New_Tai_Lue|Nko|Ogham|Ol_Chiki|Old_Italic|Old_Persian|Oriya|Osmanya|Phags_Pa|Phoenician|Rejang|Runic|Saurashtra|Shavian|Sinhala|Sundanese|Syloti_Nagri|Syriac|Tagalog|Tagbanwa|Tai_Le|Tamil|Telugu|Thaana|Thai|Tibetan|Tifinagh|Ugaritic|Vai|Yi|Ll|Lm|Lt|Lu|Lo|Mn|Mc|Me|Nd|Nl|Pc|Pd|Ps|Pe|Pi|Pf|Po|No|Sm|Sc|Sk|So|Zs|Zl|Zp|Cc|Cf|Cn|Co|Cs|N|L|M|P|S|Z|C)(})/,
            },
            {
              token: [
                'constant.language.escape',
                'invalid',
                'constant.language.escape',
              ],
              regex: /(\\p{\^?)([^/]*)(})/,
            },
            {
              token: 'regexp.keyword.operator',
              regex: '\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)',
            },
            { token: 'string.regexp', regex: /[/][imxouesn]*/, next: 'start' },
            {
              token: 'invalid',
              regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/,
            },
            {
              token: 'constant.language.escape',
              regex:
                /\(\?(?:[:=!>]|<'?[a-zA-Z]*'?>|<[=!])|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/,
            },
            { token: 'constant.language.delimiter', regex: /\|/ },
            {
              token: 'regexp.keyword',
              regex:
                /\[\[:(?:alnum|alpha|blank|cntrl|digit|graph|lower|print|punct|space|upper|xdigit|word|ascii):\]\]/,
            },
            {
              token: 'constant.language.escape',
              regex: /\[\^?/,
              push: 'regex_character_class',
            },
            { defaultToken: 'string.regexp' },
          ],
          regex_character_class: [
            { token: 'regexp.keyword', regex: /\\[wWdDhHsS]/ },
            {
              token: 'regexp.charclass.keyword.operator',
              regex: '\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)',
            },
            {
              token: 'constant.language.escape',
              regex: /&?&?\[\^?/,
              push: 'regex_character_class',
            },
            { token: 'constant.language.escape', regex: ']', next: 'pop' },
            { token: 'constant.language.escape', regex: '-' },
            { defaultToken: 'string.regexp.characterclass' },
          ],
        }),
          this.normalizeRules();
      };
    r.inherits(d, i), (t.RubyHighlightRules = d);
  },
),
  define(
    'ace/mode/matching_brace_outdent',
    ['require', 'exports', 'module', 'ace/range'],
    function (e, t, n) {
      'use strict';
      var r = e('../range').Range,
        i = function () {};
      (function () {
        (this.checkOutdent = function (e, t) {
          return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1;
        }),
          (this.autoOutdent = function (e, t) {
            var n = e.getLine(t),
              i = n.match(/^(\s*\})/);
            if (!i) return 0;
            var s = i[1].length,
              o = e.findMatchingBracket({ row: t, column: s });
            if (!o || o.row == t) return 0;
            var u = this.$getIndent(e.getLine(o.row));
            e.replace(new r(t, 0, t, s - 1), u);
          }),
          (this.$getIndent = function (e) {
            return e.match(/^\s*/)[0];
          });
      }.call(i.prototype),
        (t.MatchingBraceOutdent = i));
    },
  ),
  define(
    'ace/mode/folding/ruby',
    [
      'require',
      'exports',
      'module',
      'ace/lib/oop',
      'ace/mode/folding/fold_mode',
      'ace/range',
      'ace/token_iterator',
    ],
    function (e, t, n) {
      'use strict';
      var r = e('../../lib/oop'),
        i = e('./fold_mode').FoldMode,
        s = e('../../range').Range,
        o = e('../../token_iterator').TokenIterator,
        u = (t.FoldMode = function () {});
      r.inherits(u, i),
        function () {
          (this.indentKeywords = {
            class: 1,
            def: 1,
            module: 1,
            do: 1,
            unless: 1,
            if: 1,
            while: 1,
            for: 1,
            until: 1,
            begin: 1,
            else: 0,
            elsif: 0,
            rescue: 0,
            ensure: 0,
            when: 0,
            end: -1,
            case: 1,
            '=begin': 1,
            '=end': -1,
          }),
            (this.foldingStartMarker =
              /(?:\s|^)(def|do|while|class|unless|module|if|for|until|begin|else|elsif|case|rescue|ensure|when)\b|({\s*$)|(=begin)/),
            (this.foldingStopMarker = /(=end(?=$|\s.*$))|(^\s*})|\b(end)\b/),
            (this.getFoldWidget = function (e, t, n) {
              var r = e.getLine(n),
                i = this.foldingStartMarker.test(r),
                s = this.foldingStopMarker.test(r);
              if (i && !s) {
                var o = r.match(this.foldingStartMarker);
                if (o[1]) {
                  if (
                    o[1] == 'if' ||
                    o[1] == 'else' ||
                    o[1] == 'while' ||
                    o[1] == 'until' ||
                    o[1] == 'unless'
                  ) {
                    if (o[1] == 'else' && /^\s*else\s*$/.test(r) === !1) return;
                    if (/^\s*(?:if|else|while|until|unless)\s*/.test(r) === !1)
                      return;
                  }
                  if (o[1] == 'when' && /\sthen\s/.test(r) === !0) return;
                  if (e.getTokenAt(n, o.index + 2).type === 'keyword')
                    return 'start';
                } else {
                  if (!o[3]) return 'start';
                  if (e.getTokenAt(n, o.index + 1).type === 'comment.multiline')
                    return 'start';
                }
              }
              if (t != 'markbeginend' || !s || (i && s)) return '';
              var o = r.match(this.foldingStopMarker);
              if (o[3] === 'end') {
                if (e.getTokenAt(n, o.index + 1).type === 'keyword')
                  return 'end';
              } else {
                if (!o[1]) return 'end';
                if (e.getTokenAt(n, o.index + 1).type === 'comment.multiline')
                  return 'end';
              }
            }),
            (this.getFoldWidgetRange = function (e, t, n) {
              var r = e.doc.getLine(n),
                i = this.foldingStartMarker.exec(r);
              if (i)
                return i[1] || i[3]
                  ? this.rubyBlock(e, n, i.index + 2)
                  : this.openingBracketBlock(e, '{', n, i.index);
              var i = this.foldingStopMarker.exec(r);
              if (i)
                return i[3] === 'end' &&
                  e.getTokenAt(n, i.index + 1).type === 'keyword'
                  ? this.rubyBlock(e, n, i.index + 1)
                  : i[1] === '=end' &&
                    e.getTokenAt(n, i.index + 1).type === 'comment.multiline'
                  ? this.rubyBlock(e, n, i.index + 1)
                  : this.closingBracketBlock(e, '}', n, i.index + i[0].length);
            }),
            (this.rubyBlock = function (e, t, n, r) {
              var i = new o(e, t, n),
                u = i.getCurrentToken();
              if (!u || (u.type != 'keyword' && u.type != 'comment.multiline'))
                return;
              var a = u.value,
                f = e.getLine(t);
              switch (u.value) {
                case 'if':
                case 'unless':
                case 'while':
                case 'until':
                  var l = new RegExp('^\\s*' + u.value);
                  if (!l.test(f)) return;
                  var c = this.indentKeywords[a];
                  break;
                case 'when':
                  if (/\sthen\s/.test(f)) return;
                case 'elsif':
                case 'rescue':
                case 'ensure':
                  var c = 1;
                  break;
                case 'else':
                  var l = new RegExp('^\\s*' + u.value + '\\s*$');
                  if (!l.test(f)) return;
                  var c = 1;
                  break;
                default:
                  var c = this.indentKeywords[a];
              }
              var h = [a];
              if (!c) return;
              var p = c === -1 ? e.getLine(t - 1).length : e.getLine(t).length,
                d = t,
                v = [];
              v.push(i.getCurrentTokenRange()),
                (i.step = c === -1 ? i.stepBackward : i.stepForward);
              if (u.type == 'comment.multiline')
                while ((u = i.step())) {
                  if (u.type !== 'comment.multiline') continue;
                  if (c == 1) {
                    p = 6;
                    if (u.value == '=end') break;
                  } else if (u.value == '=begin') break;
                }
              else
                while ((u = i.step())) {
                  var m = !1;
                  if (u.type !== 'keyword') continue;
                  var g = c * this.indentKeywords[u.value];
                  f = e.getLine(i.getCurrentTokenRow());
                  switch (u.value) {
                    case 'do':
                      for (var y = i.$tokenIndex - 1; y >= 0; y--) {
                        var b = i.$rowTokens[y];
                        if (
                          b &&
                          (b.value == 'while' ||
                            b.value == 'until' ||
                            b.value == 'for')
                        ) {
                          g = 0;
                          break;
                        }
                      }
                      break;
                    case 'else':
                      var l = new RegExp('^\\s*' + u.value + '\\s*$');
                      if (!l.test(f) || a == 'case') (g = 0), (m = !0);
                      break;
                    case 'if':
                    case 'unless':
                    case 'while':
                    case 'until':
                      var l = new RegExp('^\\s*' + u.value);
                      l.test(f) || ((g = 0), (m = !0));
                      break;
                    case 'when':
                      if (/\sthen\s/.test(f) || a == 'case') (g = 0), (m = !0);
                  }
                  if (g > 0) h.unshift(u.value);
                  else if (g <= 0 && m === !1) {
                    h.shift();
                    if (!h.length) {
                      if (
                        (a == 'while' || a == 'until' || a == 'for') &&
                        u.value != 'do'
                      )
                        break;
                      if (u.value == 'do' && c == -1 && g != 0) break;
                      if (u.value != 'do') break;
                    }
                    g === 0 && h.unshift(u.value);
                  }
                }
              if (!u) return null;
              if (r) return v.push(i.getCurrentTokenRange()), v;
              var t = i.getCurrentTokenRow();
              if (c === -1) {
                if (u.type === 'comment.multiline') var w = 6;
                else var w = e.getLine(t).length;
                return new s(t, w, d - 1, p);
              }
              return new s(d, p, t - 1, e.getLine(t - 1).length);
            });
        }.call(u.prototype);
    },
  ),
  define(
    'ace/mode/ruby',
    [
      'require',
      'exports',
      'module',
      'ace/lib/oop',
      'ace/mode/text',
      'ace/mode/ruby_highlight_rules',
      'ace/mode/matching_brace_outdent',
      'ace/range',
      'ace/mode/behaviour/cstyle',
      'ace/mode/folding/ruby',
    ],
    function (e, t, n) {
      'use strict';
      var r = e('../lib/oop'),
        i = e('./text').Mode,
        s = e('./ruby_highlight_rules').RubyHighlightRules,
        o = e('./matching_brace_outdent').MatchingBraceOutdent,
        u = e('../range').Range,
        a = e('./behaviour/cstyle').CstyleBehaviour,
        f = e('./folding/ruby').FoldMode,
        l = function () {
          (this.HighlightRules = s),
            (this.$outdent = new o()),
            (this.$behaviour = new a()),
            (this.foldingRules = new f()),
            (this.indentKeywords = this.foldingRules.indentKeywords);
        };
      r.inherits(l, i),
        function () {
          (this.lineCommentStart = '#'),
            (this.getNextLineIndent = function (e, t, n) {
              var r = this.$getIndent(t),
                i = this.getTokenizer().getLineTokens(t, e),
                s = i.tokens;
              if (s.length && s[s.length - 1].type == 'comment') return r;
              if (e == 'start') {
                var o = t.match(/^.*[\{\(\[]\s*$/),
                  u = t.match(/^\s*(class|def|module)\s.*$/),
                  a = t.match(/.*do(\s*|\s+\|.*\|\s*)$/),
                  f = t.match(
                    /^\s*(if|else|when|elsif|unless|while|for|begin|rescue|ensure)\s*/,
                  );
                if (o || u || a || f) r += n;
              }
              return r;
            }),
            (this.checkOutdent = function (e, t, n) {
              return (
                /^\s+(end|else|rescue|ensure)$/.test(t + n) ||
                this.$outdent.checkOutdent(t, n)
              );
            }),
            (this.autoOutdent = function (e, t, n) {
              var r = t.getLine(n);
              if (/}/.test(r)) return this.$outdent.autoOutdent(t, n);
              var i = this.$getIndent(r),
                s = t.getLine(n - 1),
                o = this.$getIndent(s),
                a = t.getTabString();
              o.length <= i.length &&
                i.slice(-a.length) == a &&
                t.remove(new u(n, i.length - a.length, n, i.length));
            }),
            (this.getMatching = function (e, t, n) {
              if (t == undefined) {
                var r = e.selection.lead;
                (n = r.column), (t = r.row);
              }
              var i = e.getTokenAt(t, n);
              if (i && i.value in this.indentKeywords)
                return this.foldingRules.rubyBlock(e, t, n, !0);
            }),
            (this.$id = 'ace/mode/ruby'),
            (this.snippetFileId = 'ace/snippets/ruby');
        }.call(l.prototype),
        (t.Mode = l);
    },
  );
(function () {
  window.require(['ace/mode/ruby'], function (m) {
    if (typeof module == 'object' && typeof exports == 'object' && module) {
      module.exports = m;
    }
  });
})();
