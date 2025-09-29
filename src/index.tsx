import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/api/*', cors())

// メインページ - STLiNE トレーナー求人（実写版）
app.get('/', (c) => {
  return c.render(
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/b93c088662a3feaaa2bde8d47c10903f" 
                alt="STLiNE Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-sm text-gray-600">採用情報</span>
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                積極採用中！
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                全エリア積極採用中！
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                一緒に健康な未来を
                <br />
                <span className="text-blue-600">創りませんか？</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                STLiNEは「すべての人を健康に導く」という理念のもと、<br />
                トレーナーとして、人として成長できる環境を提供します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick="scrollToApplication()" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  今すぐ応募する
                </button>
                <div className="flex gap-3">
                  <button 
                    onClick="scrollToRecruitInfo()" 
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-6 rounded-lg text-lg transition-all"
                  >
                    募集要項を見る
                  </button>
                  <a 
                    href="https://lin.ee/rYDTWht" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center shadow-lg"
                  >
                    <i className="fab fa-line mr-2"></i>
                    LINE相談
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/3e17d4b165cd80f7e318d357b2fbd3a3" 
                  alt="STLiNE - Movement becomes art. 実際のトレーニング指導風景"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    Movement becomes art - 実際の指導風景
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STLiNEで働く魅力 - 実写版 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">STLiNEで働く魅力</h2>
            <p className="text-xl text-gray-600">実際のスタッフが語る職場環境</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 魅力1 - チームワーク */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/a01f165daf384a99c378de26ce1b5243" 
                  alt="STLiNEスタッフチーム"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">チーム一体感</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  仲間との絆を大切にする職場環境。互いに支え合い、共に成長していけるチームワークを重視しています。
                </p>
              </div>
            </div>

            {/* 魅力2 - 充実の研修 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/db34a7769cd4aa0141a487985c8fb718" 
                  alt="トレーニング指導風景"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">丁寧な指導</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  未経験からでも安心。NSCA、JATIなどの資格取得を全面サポート。先輩トレーナーからの丁寧な指導があります。
                </p>
              </div>
            </div>

            {/* 魅力3 - 最新設備 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/155d7e9ea914c5e63da7b7205b0334d6" 
                  alt="最新のトレーニング設備"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">最新設備</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  最新のトレーニング機器を完備。快適な職場環境で、お客様に最高のサービスを提供できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 応募から入社までの流れ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">応募から入社までの流れ</h3>
            <p className="text-xl text-gray-600">スムーズな採用プロセスでお待ちしています</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-laptop text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">WEB応募</h4>
                <p className="text-sm text-gray-600">
                  応募フォームから<br />簡単エントリー
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-file-alt text-2xl text-green-600"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">書類選考</h4>
                <p className="text-sm text-gray-600">
                  履歴書・職務経歴書の<br />審査（3営業日以内）
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-comments text-2xl text-purple-600"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">面接</h4>
                <p className="text-sm text-gray-600">
                  人事・現場責任者との<br />面談（1-2回）
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-handshake text-2xl text-red-600"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">内定・研修</h4>
                <p className="text-sm text-gray-600">
                  内定通知後<br />充実の研修プログラム
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実際の職場環境 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">実際の職場環境</h3>
            <p className="text-xl text-gray-600">STLiNEでの日常をご覧ください</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* プロフェッショナルな指導 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/ac15a6126fe2675618bb2b5d5a3e0e2a" 
                alt="プロフェッショナルなトレーニング指導"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">プロフェッショナルな指導</h4>
                <p className="text-gray-600 leading-relaxed">
                  お客様一人ひとりに合わせたオーダーメイドトレーニング。丁寧なコンサルティングから始まる、質の高いサービスを提供しています。
                </p>
              </div>
            </div>

            {/* チームで支える環境 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/8eb97a7fb6a8a84f283462f201f65cb3" 
                alt="チームで協力するスタッフ"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">チームで支える環境</h4>
                <p className="text-gray-600 leading-relaxed">
                  スタッフ同士が協力し合い、お互いの成長を支援。経験豊富な先輩トレーナーがしっかりとサポートします。
                </p>
              </div>
            </div>
          </div>

          {/* 楽しく働ける職場 */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">楽しく働ける職場</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  お客様と一緒に目標に向かって取り組む中で、達成感と充実感を得られる仕事です。明るく活気のある職場で、やりがいを感じながら働けます。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>お客様の成長を間近で実感</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>スタッフ同士の良好な関係</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>継続的なスキルアップ機会</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/6bc23a66225b3105ef0c67f3652bbeca" 
                  alt="楽しくトレーニング指導する様子"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section id="recruitInfo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">募集要項</h3>
            <p className="text-xl text-gray-600">詳細な条件・待遇について</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-bold text-gray-900 w-1/4">職種</td>
                    <td className="px-6 py-4 text-gray-700">パーソナルトレーナー（正社員）</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-bold text-gray-900">給与</td>
                    <td className="px-6 py-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <span className="font-medium text-blue-900">未経験者</span>
                          <span className="font-bold text-xl text-blue-600">月給 268,000円</span>
                        </div>
                        <div className="text-sm text-gray-600 ml-4">
                          基本給220,000円 + みなし残業手当48,000円
                        </div>
                        <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                          <span className="font-medium text-green-900">経験者</span>
                          <span className="font-bold text-xl text-green-600">月給 300,000円</span>
                        </div>
                        <div className="text-sm text-gray-600 ml-4">
                          基本給252,000円 + みなし残業手当48,000円
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-bold text-gray-900">賞与・手当</td>
                    <td className="px-6 py-4">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><i className="fas fa-gift text-blue-500 mr-3"></i>賞与年2回（業績により変動）</li>
                        <li className="flex items-center"><i className="fas fa-chart-line text-green-500 mr-3"></i>各種インセンティブ制度</li>
                        <li className="flex items-center"><i className="fas fa-subway text-purple-500 mr-3"></i>交通費支給（上限あり）</li>
                        <li className="flex items-center"><i className="fas fa-home text-orange-500 mr-3"></i>住宅手当・家賃補助（近隣在住者対象）</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-bold text-gray-900">勤務時間</td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-clock text-blue-500 mr-3"></i>
                        <span>10:00～22:00（実働8時間・シフト制）</span>
                      </div>
                      <span className="text-sm text-gray-500">※みなし残業代は月20時間分を含む</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-bold text-gray-900">休日・休暇</td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="flex items-center">
                        <i className="fas fa-calendar-alt text-green-500 mr-3"></i>
                        <span>月8日休み（シフト制）、有給休暇、特別休暇、産前産後・育児休暇</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-bold text-gray-900">保険・福利厚生</td>
                    <td className="px-6 py-4">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                            <i className="fas fa-shield-alt text-blue-500 mr-2"></i>
                            法定福利厚生
                          </h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 健康保険（協会けんぽ）</li>
                            <li>• 厚生年金保険</li>
                            <li>• 雇用保険・労災保険</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                            <i className="fas fa-star text-yellow-500 mr-2"></i>
                            STLiNE特典
                          </h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• ジム利用無料</li>
                            <li>• 資格取得支援制度</li>
                            <li>• 家族・友人優待制度</li>
                            <li>• サプリ支給＆社員割引</li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-bold text-gray-900">応募資格</td>
                    <td className="px-6 py-4">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><i className="fas fa-graduation-cap text-blue-500 mr-3"></i>高校卒業以上</li>
                        <li className="flex items-center"><i className="fas fa-heart text-red-500 mr-3"></i>トレーナー業務に興味がある方</li>
                        <li className="flex items-center"><i className="fas fa-seedling text-green-500 mr-3"></i>未経験歓迎（研修制度完備）</li>
                        <li className="flex items-center"><i className="fas fa-certificate text-purple-500 mr-3"></i>関連資格保有者優遇（NSCA、JATI等）</li>
                        <li className="flex items-center"><i className="fas fa-users text-orange-500 mr-3"></i>人と接することが好きな方</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 bg-gray-50 font-bold text-gray-900">勤務地</td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="flex items-start">
                        <i className="fas fa-map-marker-alt text-red-500 mr-3 mt-1"></i>
                        <div>
                          <span>東京・神奈川・埼玉・千葉エリアの各店舗</span><br />
                          <span className="text-sm text-gray-500">※希望勤務地を考慮して配属決定</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 応募・問い合わせ */}
      <section id="application" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">応募・お問い合わせ</h3>
            <p className="text-xl text-gray-600">お気軽にご連絡ください</p>
          </div>
          
          {/* 問い合わせ方法の選択肢 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* 応募フォーム */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-edit text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">応募フォーム</h4>
              <p className="text-sm text-gray-600 mb-4">
                正式な応募はこちらから<br />
                詳細情報を入力できます
              </p>
              <button 
                onClick="document.querySelector('.application-form').scrollIntoView({behavior: 'smooth'})"
                className="text-blue-600 font-medium hover:text-blue-700 text-sm"
              >
                下記フォームへ ↓
              </button>
            </div>
            
            {/* 公式LINE */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-line text-2xl text-green-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">公式LINE</h4>
              <p className="text-sm text-gray-600 mb-4">
                気軽な質問・相談はこちら<br />
                すぐに回答いたします
              </p>
              <a 
                href="https://lin.ee/rYDTWht" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 text-sm"
              >
                LINEで相談 <i className="fas fa-external-link-alt text-xs ml-1"></i>
              </a>
            </div>
            
            {/* 公式Instagram */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-instagram text-2xl text-purple-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">公式Instagram</h4>
              <p className="text-sm text-gray-600 mb-4">
                職場の雰囲気をチェック<br />
                DMでも気軽にご相談
              </p>
              <a 
                href="https://www.instagram.com/stline__official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 text-sm"
              >
                Instagramを見る <i className="fas fa-external-link-alt text-xs ml-1"></i>
              </a>
            </div>
          </div>
          
          {/* 応募フォーム */}
          <div className="application-form">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">正式応募フォーム</h4>
              <p className="text-gray-600">下記の項目をご入力ください</p>
            </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    氏名 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    フリガナ <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ヤマダタロウ"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    経験区分 <span className="text-red-500">*</span>
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="未経験">未経験</option>
                    <option value="経験者">経験者</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    希望勤務地 <span className="text-red-500">*</span>
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="東京">東京</option>
                    <option value="神奈川">神奈川</option>
                    <option value="埼玉">埼玉</option>
                    <option value="千葉">千葉</option>
                    <option value="その他">その他・相談</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  保有資格・経験
                </label>
                <textarea 
                  rows={4}
                  placeholder="保有している資格や経験について記載してください（NSCA、JATI、実務経験など）"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  志望動機・自己PR
                </label>
                <textarea 
                  rows={4}
                  placeholder="STLiNEへの志望動機や自己PRをご記入ください"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="text-center pt-6">
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  応募する
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  応募いただいた内容は、採用業務以外には使用いたしません。
                </p>
              </div>
            </form>
          </div>
        </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/b93c088662a3feaaa2bde8d47c10903f" 
                  alt="STLiNE Logo"
                  className="h-8 w-auto filter brightness-0 invert mr-4"
                />
              </div>
              <p className="text-gray-400 mb-4">Stretch & Training</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                すべての人を健康に導くという理念のもと、<br />
                質の高いパーソナルトレーニングサービスを<br />
                提供しています。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">採用について</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• 募集要項</li>
                <li>• 福利厚生</li>
                <li>• よくある質問</li>
                <li>• 応募フォーム</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">お問い合わせ</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                採用に関するお問い合わせは、<br />
                以下の方法でお気軽にご連絡ください。
              </p>
              
              {/* 問い合わせ方法 */}
              <div className="space-y-4 mb-6">
                {/* 応募フォーム */}
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-edit text-sm"></i>
                  </div>
                  <span className="text-sm">応募フォーム（上記）</span>
                </div>
                
                {/* 公式LINE */}
                <a 
                  href="https://lin.ee/rYDTWht" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors">
                    <i className="fab fa-line text-sm"></i>
                  </div>
                  <span className="text-sm">公式LINE（気軽な相談）</span>
                </a>
                
                {/* 公式Instagram */}
                <a 
                  href="https://www.instagram.com/stline__official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    <i className="fab fa-instagram text-sm"></i>
                  </div>
                  <span className="text-sm">公式Instagram（職場の様子）</span>
                </a>
              </div>
              
              {/* ソーシャルリンク */}
              <div className="flex space-x-4">
                <a 
                  href="https://lin.ee/rYDTWht" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-colors"
                  title="公式LINE"
                >
                  <i className="fab fa-line text-white"></i>
                </a>
                <a 
                  href="https://www.instagram.com/stline__official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 rounded-full flex items-center justify-center transition-all"
                  title="公式Instagram"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            © 2024 STLiNE. All rights reserved.
          </div>
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
          
          function scrollToRecruitInfo() {
            document.getElementById('recruitInfo').scrollIntoView({ 
              behavior: 'smooth' 
            });
          }
          
          // フォーム送信処理
          document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('form');
            if (form) {
              form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('応募ありがとうございます。内容を確認後、3営業日以内にご連絡いたします。');
              });
            }
            
            // スクロール時のヘッダー効果
            let lastScrollY = window.scrollY;
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', function() {
              if (window.scrollY > 100) {
                header.classList.add('shadow-lg');
              } else {
                header.classList.remove('shadow-lg');
              }
              lastScrollY = window.scrollY;
            });
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
    message: '応募を受け付けました。3営業日以内にご連絡いたします。' 
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