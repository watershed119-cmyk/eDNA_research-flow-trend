import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Beaker, 
  Mountain, 
  Fish, 
  Zap, 
  Globe, 
  Globe2, 
  Wind, 
  Waves, 
  Brain, 
  Smartphone, 
  Thermometer,
  ExternalLink,
  Download
} from "lucide-react";
import { ednaContent } from "@/data/ednaContent";
import { useState } from "react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Beaker, Mountain, Fish, Zap, Globe, Globe2, Wind, Waves, Brain, Smartphone, Thermometer
};

export default function Home() {
  const [expandedRef, setExpandedRef] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663694397970/UCB6c52ij2HhNr32J3PGHX/edna_logo-cu8PfUCFCMgovy2XyWo9QG.webp" 
              alt="eDNA Logo" 
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold text-blue-900">환경 DNA 연구 포털</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#timeline" className="text-gray-700 hover:text-blue-900 transition">타임라인</a>
            <a href="#trends" className="text-gray-700 hover:text-blue-900 transition">최신 동향</a>
            <a href="#methodology" className="text-gray-700 hover:text-blue-900 transition">방법론</a>
            <a href="#references" className="text-gray-700 hover:text-blue-900 transition">레퍼런스</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {ednaContent.hero.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {ednaContent.hero.description}
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                  {ednaContent.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-900 text-blue-900">
                  보고서 다운로드
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663694397970/UCB6c52ij2HhNr32J3PGHX/edna_hero_background-Gt4zZPRztjKLMWxZHZMFU4.webp"
                alt="eDNA Visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">연구 진화</h2>
            <p className="text-lg text-gray-600">생물다양성 과학을 변화시킨 수십 년의 혁신</p>
          </div>
          
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663694397970/UCB6c52ij2HhNr32J3PGHX/edna_research_timeline-XJTGxVy6N8MZWYoo2E4PU5.webp"
              alt="eDNA 연구 타임라인"
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {ednaContent.timeline.map((item, idx) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Card key={idx} className="border-l-4 border-l-blue-900 hover:shadow-lg transition">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {IconComponent && <IconComponent className="h-5 w-5 text-blue-900" />}
                      <Badge variant="secondary" className="text-xs">{item.year}</Badge>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Trends Section */}
      <section id="trends" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">최신 연구 동향 (2024-2026)</h2>
            <p className="text-lg text-gray-600">글로벌 eDNA 모니터링의 최첨단 발전</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ednaContent.trends.map((trend) => {
              const IconComponent = iconMap[trend.icon];
              return (
                <Card key={trend.id} className="hover:shadow-lg transition cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{trend.title}</CardTitle>
                        <CardDescription>{trend.description}</CardDescription>
                      </div>
                      {IconComponent && <IconComponent className="h-6 w-6 text-blue-900 flex-shrink-0" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{trend.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Global Network Visualization */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663694397970/UCB6c52ij2HhNr32J3PGHX/edna_global_network-U3aTW2MUk7gVuHKEU2WLRR.webp"
              alt="글로벌 eDNA 연구 네트워크"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">분석 방법론</h2>
            <p className="text-lg text-gray-600">수질 샘플에서 생물다양성 통찰력까지</p>
          </div>

          {/* Workflow Diagram */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663694397970/UCB6c52ij2HhNr32J3PGHX/edna_methods_diagram-3RUmgE5zYDFVHfXDVgKEuq.webp"
              alt="eDNA 분석 워크플로우"
              className="w-full h-auto"
            />
          </div>

          {/* Detailed Steps */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {ednaContent.methodology.steps.map((step) => (
              <Card key={step.number} className="border-t-4 border-t-blue-900">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-0.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Challenges Section */}
          <div className="bg-amber-50 border-l-4 border-l-amber-600 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 과제 및 해결 방안</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {ednaContent.methodology.challenges.map((challenge, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2 text-amber-900">{challenge.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{challenge.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-700">해결 방안:</p>
                    {challenge.solutions.map((solution, sidx) => (
                      <p key={sidx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        {solution}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">주요 레퍼런스</h2>
            <p className="text-lg text-gray-600">eDNA 연구의 기초 및 최첨단 논문</p>
          </div>

          <div className="space-y-4">
            {ednaContent.references.map((ref) => (
              <Card 
                key={ref.id}
                className="cursor-pointer hover:shadow-lg transition"
                onClick={() => setExpandedRef(expandedRef === ref.id ? null : ref.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-900">{ref.year}</Badge>
                        {ref.doi && (
                          <Badge variant="secondary" className="text-xs">동료 검토</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight">{ref.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {ref.authors}
                      </CardDescription>
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-semibold">{ref.journal}</span>
                        {ref.volume && ` • ${ref.volume}`}
                        {ref.pages && ` • pp. ${ref.pages}`}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      {ref.url && (
                        <a 
                          href={ref.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-5 w-5 text-blue-900" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                {expandedRef === ref.id && (
                  <CardContent className="pt-0 border-t border-gray-200">
                    <div className="space-y-3 pt-4">
                      {ref.doi && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">DOI</p>
                          <code className="text-xs bg-gray-100 p-2 rounded block break-all">{ref.doi}</code>
                        </div>
                      )}
                      <div className="flex gap-2">
                        {ref.url && (
                          <a 
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-blue-900 hover:underline"
                          >
                            전문 보기
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">eDNA 소개</h4>
              <p className="text-gray-400 text-sm">환경 DNA 연구는 우리가 전 지구적으로 생물다양성을 이해하고 보호하는 방식을 변화시키고 있습니다.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">빠른 링크</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#timeline" className="hover:text-white transition">타임라인</a></li>
                <li><a href="#trends" className="hover:text-white transition">최신 동향</a></li>
                <li><a href="#methodology" className="hover:text-white transition">방법론</a></li>
                <li><a href="#references" className="hover:text-white transition">레퍼런스</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">자료</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://www.gbif.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GBIF</a></li>
                <li><a href="https://www.ibol.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">iBOL</a></li>
                <li><a href="https://iestf.global" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">iESTF</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">문의</h4>
              <p className="text-gray-400 text-sm">eDNA 연구 및 협력 기회에 대한 문의는 해당 지역의 연구 기관에 연락하시기 바랍니다.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 환경 DNA 연구 포털. 모든 권리 보유. | 동료 검토 논문 및 국제 이니셔티브에서 수집한 연구.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
