import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/api/*', cors())

// メインページ - STLiNE トレーナー求人
app.get('/', (c) => {
  return c.render(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                <span className="text-indigo-600">STLiNE</span> トレーナー募集
              </h1>
              <p className="text-gray-600 mt-2">stretch & training STLiNE</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">求人情報</p>
              <p className="text-lg font-semibold text-indigo-600">正社員募集中</p>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* メインビジュアル */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              一緒に<span className="text-indigo-600">健康な未来</span>を創りませんか？
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              すべての人を健康に導くという理念のもと、<br/>
              あなたの成長をサポートします
            </p>
            <button 
              onClick="scrollToApplication()" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              今すぐ応募する
            </button>
          </div>
        </section>

        {/* 給与・待遇情報 */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          {/* 未経験者 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                未経験歓迎
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">未経験者</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">基本給</span>
                <span className="font-bold text-lg">220,000円</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">みなし残業手当</span>
                <span className="font-bold text-lg">48,000円</span>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">月給合計</span>
                <span className="font-bold text-xl text-indigo-600">268,000円</span>
              </div>
            </div>
          </div>

          {/* 経験者 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                経験者優遇
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">経験者</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">基本給</span>
                <span className="font-bold text-lg">252,000円</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">みなし残業手当</span>
                <span className="font-bold text-lg">48,000円</span>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">月給合計</span>
                <span className="font-bold text-xl text-indigo-600">300,000円</span>
              </div>
            </div>
          </div>
        </section>

        {/* その他待遇 */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">その他待遇・福利厚生</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-indigo-600 mb-3">賞与・インセンティブ</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  賞与年2回
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  各種インセンティブ制度
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-indigo-600 mb-3">社会保険</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  健康保険（協会けんぽ）
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  厚生年金保険・雇用保険・労災保険完備
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* STLiNE特典 */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">STLiNEならではの特典</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dumbbell text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">ジム利用無料</h4>
              <p className="text-sm opacity-90">自主トレーニング可能</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">資格取得支援</h4>
              <p className="text-sm opacity-90">NSCA, JATI等の資格サポート</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">家族優待制度</h4>
              <p className="text-sm opacity-90">家族・友人の利用優待</p>
            </div>
          </div>
        </section>

        {/* 応募フォーム */}
        <section id="application" className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">応募フォーム</h3>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  氏名 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  フリガナ <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                経験区分 <span className="text-red-500">*</span>
              </label>
              <select 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">選択してください</option>
                <option value="未経験">未経験</option>
                <option value="経験者">経験者</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                保有資格・経験
              </label>
              <textarea 
                rows={4}
                placeholder="保有している資格や経験について記載してください（任意）"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                志望動機・自己PR
              </label>
              <textarea 
                rows={4}
                placeholder="志望動機や自己PRをご記入ください（任意）"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button 
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                応募する
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">stretch & training STLiNE</h3>
          <p className="text-gray-400 mb-4">すべての人を健康に導く</p>
          <p className="text-sm text-gray-500">
            採用に関するお問い合わせは、上記の応募フォームをご利用ください。
          </p>
        </div>
      </footer>

      {/* JavaScript */}
      <script>
        {`
          function scrollToApplication() {
            document.getElementById('application').scrollIntoView({ 
              behavior: 'smooth' 
            });
          }
          
          // フォーム送信処理
          document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('form');
            if (form) {
              form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('応募ありがとうございます。内容を確認後、ご連絡いたします。');
              });
            }
          });
        `}
      </script>
    </div>
  )
})

// API endpoints
app.post('/api/apply', async (c) => {
  const body = await c.req.json()
  
  // ここで実際のフォーム処理を行う
  // 例: データベースへの保存、メール送信など
  
  return c.json({ 
    success: true, 
    message: '応募を受け付けました。ありがとうございます。' 
  })
})

// 福利厚生詳細API
app.get('/api/benefits', (c) => {
  return c.json({
    legal_benefits: [
      '健康保険（協会けんぽ）',
      '厚生年金保険',
      '雇用保険', 
      '労災保険',
      '介護保険（40歳以上）',
      '子ども・子育て拠出金'
    ],
    original_benefits: {
      life_support: [
        '交通費支給（上限あり）',
        '住宅手当／家賃補助（近隣在住者対象）',
        '健康診断・インフルエンザ予防接種 全額会社負担',
        '懇親会・レクリエーション補助'
      ],
      career_support: [
        '資格取得支援制度（NSCA, JATI など）',
        '社内勉強会・研修制度',
        'スキルアップセミナー参加補助',
        '経営スキル研修'
      ],
      stline_special: [
        'ジム利用無料（自主トレ可）',
        '家族・友人優待制度',
        'プロテイン・サプリ支給＆社員割引',
        'トレーニングウェア・シューズ購入補助',
        '社内フィットネスイベント補助',
        '健康をテーマにした社内交流イベント'
      ]
    }
  })
})

export default app