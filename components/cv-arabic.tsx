import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  GraduationCap,
  Briefcase,
  Award,
  Star,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  Calendar,
  Building2,
  Globe,
  BookOpen,
  Lightbulb,
  Heart,
  Shield,
} from "lucide-react"

export function CVArabic() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 print:p-0 print:max-w-none" dir="rtl">
      {/* Header Section */}
      <header className="bg-gradient-to-l from-slate-800 to-slate-900 text-white rounded-2xl p-6 md:p-10 mb-6 print:rounded-none print:mb-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-4xl md:text-5xl font-bold text-slate-900 shadow-xl">
            م ن
          </div>
          <div className="text-center md:text-right flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">معين نجم</h1>
            <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-4">خبير التميز المؤسسي وتحسين الخدمات</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">🎯 إدارة المشاريع</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">⭐ التميز</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">📊 الجودة</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">📈 إدارة الأداء</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">🔑 مؤشرات الأداء</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">💡 الاستراتيجية</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">🔧 تحسين الخدمات</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">😊 تجربة العملاء</Badge>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <a href="tel:0567889975" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" /> 0567889975
              </a>
              <a
                href="mailto:Moein-najem@hotmail.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" /> Moein-najem@hotmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> الإمارات - دبي
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" /> الإقامة الذهبية
              </span>
              <a
                href="https://linkedin.com/in/moein-najem"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> لينكد إن
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
        {/* Right Column (RTL) */}
        <div className="lg:col-span-1 space-y-6 print:space-y-4">
          {/* Profile Summary */}
          <Card className="p-5 border-r-4 border-r-amber-500 border-l-0">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-500" /> الملف الشخصي
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              يمتلك معين نجم خبرة واسعة في إدارة المشاريع في مجالات التميز والجودة وتوثيق العمليات والتحسين المستمر
              وإدارة الأداء وتجربة العملاء وتصميم الخدمات وتحسينها ورسم العمليات وتطويرها والاستشارات الإدارية لأكثر من
              12 عامًا، وتطوير أداء الخدمات العامة وتنفيذ النماذج وتقييم القنوات وتحسينها. عمل مع العديد من المؤسسات
              الحكومية في الإمارات والسعودية لتحقيق الاعتمادات المحلية والدولية بما في ذلك SCXA (كمحكّم)، DGEP، GSRS 7
              نجوم، ICXS، C2E، R4E، GEM2، ADAEP و SKEA.
            </p>
          </Card>

          {/* Key Stats */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" /> 📊 الإنجازات الرئيسية
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-600">+12</div>
                <div className="text-xs text-muted-foreground">سنة خبرة</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-600">+50</div>
                <div className="text-xs text-muted-foreground">مشروع</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-600">+10</div>
                <div className="text-xs text-muted-foreground">جهة حكومية</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-600">SCXA</div>
                <div className="text-xs text-muted-foreground">محكّم</div>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-500" /> 🎓 التعليم
            </h2>
            <div className="space-y-4">
              <div className="border-r-2 border-amber-500 pr-3">
                <p className="font-semibold text-sm">ماجستير إدارة الأعمال - إدارة المشاريع</p>
                <p className="text-xs text-muted-foreground">جامعة ميدوشين (طالب حالياً)</p>
              </div>
              <div className="border-r-2 border-slate-300 pr-3">
                <p className="font-semibold text-sm">ماجستير مصغر - إدارة الأعمال والإدارة العامة</p>
                <p className="text-xs text-muted-foreground">المعهد الدولي لإدارة الأعمال (IBMI)</p>
              </div>
              <div className="border-r-2 border-slate-300 pr-3">
                <p className="font-semibold text-sm">بكالوريوس - الأدب الإنجليزي واللغويات</p>
                <p className="text-xs text-muted-foreground">جامعة دمشق</p>
              </div>
            </div>
          </Card>

          {/* Training Courses */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> 🏆 الدورات التدريبية
            </h2>
            <div className="space-y-2 text-sm">
              {[
                "إدارة المشاريع الرشيقة Agile",
                "شهادة سكرم ماستر",
                "توسيع نطاق Agile وفريق الفرق",
                "الإبداع والتفكير التصميمي والابتكار للأعمال",
                "تدريب المقيّم الداخلي ICXS 2019",
                "محترف استراتيجية معتمد",
                "محترف بطاقة الأداء المتوازن معتمد",
                "محترف إدارة المخاطر RMP",
                "محترف مؤشرات الأداء KPI معتمد",
                "الاستراتيجية والعمليات",
                "دورة تدريب PMP",
                "دورة EAT من EFQM (مقيّم EFQM)",
                "دورة ISO 9001-2015 من Lloyd's Register / LRQA",
                "دورة إعداد الاستطلاعات واستطلاعات الرأي - CMI Excellence",
                "دورة تدريب المدربين - CMI Excellence",
                "دليل مهارات الحزم - Management Study Guide",
              ].map((cert, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" /> 💼 المهارات
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "إدارة المشاريع",
                "تحسين الخدمات",
                "تصميم الخدمات",
                "استراتيجية التطوير وتحديد مؤشرات الأداء",
                "رسم وتحسين العمليات",
                "تحليل تجربة العملاء",
                "دراسات إسعاد العملاء",
                "تقارير المتسوق السري",
                "تصميم التقارير",
                "MS Office متقدم",
                "إعادة هيكلة الأقسام",
                "تواصل ممتاز",
                "إدارة مجموعات التركيز",
                "تدريب الموظفين",
                "خطط التشغيل والعمل",
                "إغلاق مجالات التحسين",
                "إنشاء مبادرات جديدة",
                "إدارة المخاطر",
              ].map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Awards */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" /> 🏅 الجوائز والتقديرات
            </h2>
            <div className="space-y-2 text-sm">
              {[
                "شهادة تقدير - وزير الداخلية، شرطة عجمان 2025",
                "شهادة تقدير - وزير الداخلية الإمارات",
                "شهادة تقدير - بلدية دبي",
                "شهادة تقدير - هيئة الصحة بدبي",
                "جائزة البطل المجهول - إيثوس للحلول المتكاملة",
                "أفضل موظف قسم الاستشارات - إيثوس للحلول المتكاملة",
                "موظف العام 2020 - إيثوس للحلول المتكاملة",
              ].map((award, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{award}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Languages */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-amber-500" /> 🗣️ اللغات
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">العربية</span>
                  <span className="text-xs text-muted-foreground">اللغة الأم</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full">
                  <div className="h-full w-full bg-amber-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">الإنجليزية</span>
                  <span className="text-xs text-muted-foreground">طلاقة</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full">
                  <div className="h-full w-[90%] bg-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Personal Info */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-500" /> 📋 المعلومات الشخصية
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">الحالة الاجتماعية:</span>
                <span className="font-medium">متزوج</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">الجنسية:</span>
                <span className="font-medium">سورية</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">مكان الإقامة الحالي:</span>
                <span className="font-medium">دبي، الإمارات</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">رخصة القيادة:</span>
                <span className="font-medium">إماراتية</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">تاريخ الميلاد:</span>
                <span className="font-medium">01/01/1988</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Left Column - Experience (RTL) */}
        <div className="lg:col-span-2 space-y-6 print:space-y-4">
          <Card className="p-5">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-amber-500" /> 💼 الخبرة المهنية
            </h2>

            {/* IMPACT iN */}
            <div className="mb-8 print:mb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">مدير الجودة والتميز</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> IMPACT iN
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> يوليو 2024 - حتى الآن
                </Badge>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 mb-3">
                <p className="text-sm text-muted-foreground mb-3">
                  إدارة وتنفيذ مشاريع استشارية وإدارة جميع الموارد البشرية للشركة:
                </p>
                <div className="grid gap-3">
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-700 text-xs">✅ مكتمل</Badge>
                      <span className="font-medium text-sm">جائزة عجمان للتميز ونظام التصنيف النجمي (7 نجوم)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      دائرة الأراضي والتنظيم العقاري - عجمان. 2024. النتيجة: 6 نجوم لمركز إسعاد المتعاملين و 5 نجوم
                      للموقع الإلكتروني
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-700 text-xs">🔄 جارٍ</Badge>
                      <span className="font-medium text-sm">نظام التصنيف النجمي (7 نجوم) - المعيار الجديد</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      وزارة الداخلية - شرطة عجمان. تطبيق كامل (تقييم، استشارات، تطوير). 2024 حتى الآن
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-700 text-xs">✅ معتمد</Badge>
                      <span className="font-medium text-sm">ISO 26000:2010 و PAS 7070:2016</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      نظام إدارة المسؤولية الاجتماعية ونظام إدارة عمليات المقارنة المرجعية - دائرة الموانئ والجمارك -
                      حكومة عجمان
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-700 text-xs">🔄 جارٍ</Badge>
                      <span className="font-medium text-sm">نظام التصنيف النجمي (7 نجوم) - MOIAT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      وزارة الصناعة والتكنولوجيا المتقدمة - تطبيق كامل (تقييم، استشارات، تطوير)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-700 text-xs">🔄 جارٍ</Badge>
                      <span className="font-medium text-sm">ZGB - صفر بيروقراطية حكومية</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      تطبيق معايير ZGB لتحسين العمليات والخدمات لوزارة الصناعة والتكنولوجيا المتقدمة
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BSI Contract */}
            <div className="mb-8 print:mb-4 border-r-4 border-slate-300 pr-4 border-l-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">خبير التصنيف النجمي ومقيّم رئيسي ZGB</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> BSI (عقد)
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> أغسطس 2024
                </Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• خبير التصنيف النجمي العالمي: تدريب فريق المقيّمين ومراجعة التقارير النهائية فنياً</li>
                <li>• مقيّم رئيسي لصفر بيروقراطية حكومية ZGB في الدورة الأولى</li>
                <li>• تقييم الجهات الحكومية بناءً على معايير صفر بيروقراطية حكومية</li>
              </ul>
            </div>

            {/* Ministry of Health */}
            <div className="mb-8 print:mb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">خبير التميز المؤسسي وتحسين الخدمات</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> وزارة الصحة ووقاية المجتمع
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> نوفمبر 2022 - يوليو 2024
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">151</div>
                  <div className="text-xs text-muted-foreground">خدمة معاد تصميمها</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">9</div>
                  <div className="text-xs text-muted-foreground">مسارات تحويلية</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">2</div>
                  <div className="text-xs text-muted-foreground">أقسام تم تأسيسها</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      1
                    </span>
                    مدير مشروع - إعادة هندسة الخدمات
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pr-7">
                    <li>• إعادة تصميم حوالي 151 خدمة باستخدام تصميم الخدمات والتفكير التصميمي</li>
                    <li>
                      • إعادة هندسة خدمات الوزارة بالاستفادة من مدخلات العملاء والشركاء والموظفين ومالكي الخدمات
                      والقيادة
                    </li>
                    <li>• تحسين وتطوير الخدمات لتسهيل عملية التحول الرقمي الإلكتروني</li>
                    <li>• ضمان الامتثال لمتطلبات PMO و TDRA</li>
                    <li>• تجديد وأتمتة جميع الخدمات بحلول حديثة تزيد الكفاءة والإنتاجية</li>
                    <li>• استخدام التفكير التصميمي لتطوير تصور خدمات الوزارة</li>
                    <li>• تصميم رحلات المستخدم الحالية (As-Is) وتحديد المشاكل ونقاط الألم</li>
                    <li>• تصميم رحلات العميل المستقبلية (To-Be) ومخططات الخدمة وتدفق العمليات</li>
                    <li>
                      • العمل على مشروع صفر بيروقراطية حكومية (تقليل الخطوات والوقت والإجراءات والوثائق والمتطلبات
                      وزيادة التكاملات)
                    </li>
                    <li>• إعداد الأداة المستخدمة لقياس البيروقراطية في الخدمات</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      2
                    </span>
                    تأسيس قسم قيادة الخدمات (إدارة الاستراتيجية والمستقبل)
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pr-7">
                    <li>• إعداد إجراءات التشغيل القياسية للقسم "دليل العمليات"</li>
                    <li>• تطبيق دليل تطوير الخدمات 2.0 على خدمات الوزارة</li>
                    <li>• العمل على المسارات التحويلية 9 خدمات (الدورة الأولى والثانية والثالثة) للخدمات 2.0</li>
                    <li>• العمل على حزمة (أكرم) لإجراءات ما بعد الوفاة مع الجهات الاتحادية ومكتب رئيس الوزراء</li>
                    <li>• دراسة إجراءات الخدمة وروابطها مع الجهات الاتحادية والمحلية</li>
                    <li>• إعداد الحالة المستقبلية والحالة المستهدفة للحزمة</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      3
                    </span>
                    تأسيس قسم الاستدامة والمسؤولية الاجتماعية
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pr-7">
                    <li>• إعداد إجراءات التشغيل ودليل العمليات للقسم</li>
                    <li>• اقتراح مبادرات المسؤولية الاجتماعية ومتابعة تنفيذها مع الشركاء والمكاتب التمثيلية</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      4
                    </span>
                    مبادرة نجمة الاستدامة - نظام التصنيف النجمي (يناير 2023)
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pr-7">
                    <li>• مراجعة تقارير الملاحظات الصادرة من مكتب رئيس الوزراء لـ 7 نجوم</li>
                    <li>• إجراء التقييم الداخلي/الذاتي على أساس نصف سنوي وإعداد تقارير التقييم</li>
                    <li>• اقتراح وتنفيذ مبادرات التطوير وإعداد تقارير النتائج</li>
                    <li>• التنسيق مع "اللجنة العليا" لتنفيذ 7 نجوم</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      5
                    </span>
                    GEM 2.1 "دليل نموذج التميز الحكومي"
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pr-7">
                    <li>• العمل على تطبيق ركائز ومعايير الجائزة لجميع إدارات الوزارة</li>
                    <li>• إعداد الملف للتقديم: تحقيق الرؤية، القيمة المميزة، الممكنات</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ethos Integrated Solutions */}
            <div className="mb-8 print:mb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">مدير الاستشارات والتعلم والتطوير</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> إيثوس للحلول المتكاملة
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> 2017 - نوفمبر 2022
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">+21</div>
                  <div className="text-xs text-muted-foreground">مشروع استشاري</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">5</div>
                  <div className="text-xs text-muted-foreground">سنوات خبرة</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">100%</div>
                  <div className="text-xs text-muted-foreground">نجاح المشاريع</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                إدارة جميع المشاريع الاستشارية والتدريبية في الشركة (العروض، الموارد، المالية). قائمة المشاريع:
              </p>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-3">🏢 أبرز المشاريع المُدارة:</h4>
                <div className="grid gap-2 text-xs">
                  {[
                    {
                      year: "2020/2021",
                      project:
                        "وزارة الداخلية - نظام 7 نجوم (شرطة عجمان 4 مراكز، شرطة رأس الخيمة 4 مراكز، شرطة الشارقة 4 مراكز، شرطة الفجيرة 1 مركز، مركز اتصال الإدارة العامة للإسعاد)",
                    },
                    {
                      year: "2020/2021",
                      project: "دائرة الأراضي والتنظيم العقاري - عجمان - نظام 7 نجوم المعيار الجديد تطبيق كامل",
                    },
                    {
                      year: "2020",
                      project:
                        "بلدية دبي - DGEP و 7 نجوم (4 مراكز بلدية، مركز الاتصال، المختبر المركزي، الخدمات البيطرية، قسم المسالخ + تحسين تجربة العملاء لـ 14 خدمة)",
                    },
                    {
                      year: "2020",
                      project: "هيئة الطرق والمواصلات - دبي - 7 نجوم (مراكز البرشاء/ديرة/أم الرمول)",
                    },
                    {
                      year: "2019",
                      project:
                        "هيئة الصحة بدبي - DGEP و 7 نجوم (قطاع التنظيم الصحي 1 مركز + قطاع اللياقة الطبية 17 مركز + تطوير ميثاق العملاء)",
                    },
                    {
                      year: "2018/2019",
                      project: "دائرة الأراضي والتنظيم العقاري - عجمان - 7 نجوم المعيار القديم تطبيق كامل",
                    },
                    { year: "2018", project: "بلدية أبوظبي - تقييم الفجوات 7 نجوم" },
                    {
                      year: "2017/2018",
                      project:
                        "الهيئة الاتحادية للهوية والجنسية - 7 نجوم (مراكز البرشاء، أم القيوين، عجمان، رأس الخيمة + خدمات بوابة التحقق VG-ICA)",
                    },
                    { year: "2017/2018", project: "النيابة العامة - رأس الخيمة - 7 نجوم تطبيق كامل" },
                    { year: "2017", project: "شرطة رأس الخيمة - 7 نجوم تطبيق كامل" },
                    {
                      year: "2017",
                      project: "شرطة دبي - 7 نجوم (مراكز شرطة القصيص، البرشاء، الراشدية، الرفاع)",
                    },
                    {
                      year: "2017",
                      project: "المديرية العامة للإقامة وشؤون الأجانب – شرطة أبوظبي - تحليل الفجوات 7 نجوم",
                    },
                    {
                      year: "متنوع",
                      project:
                        "مشروع الوزارة للصحة GSRS (3 ركائز: الاستشارات، التكنولوجيا، القياس)، EHS GSRS (ركيزتان)، MOI GSRS، شرطة أبوظبي GSRS، تدريب مقيّم داخلي ICXS لـ RTA، تحليل فجوات ICXS لبلدية عجمان",
                    },
                    {
                      year: "متنوع",
                      project:
                        "مستشار أول: 'تسهيل إجراءات الأعمال وتبسيط المتطلبات الحكومية وتقليلها 30%' - المجلس التنفيذي لدبي - صناع المدينة، DCAA",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start bg-white p-2 rounded border border-slate-200">
                      <Badge variant="outline" className="text-xs shrink-0">
                        {item.year}
                      </Badge>
                      <span className="text-muted-foreground">{item.project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PDCA Management */}
            <div className="mb-8 print:mb-4 border-r-4 border-slate-300 pr-4 border-l-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">مستشار التميز</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> PDCA للاستشارات الإدارية
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> نوفمبر 2016 - أبريل 2017
                </Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• مشروع DGEP "التميز الحكومي لدبي" - المديرية العامة للإقامة وشؤون الأجانب - دبي</li>
                <li>
                  • "برنامج الإمارات للتميز في الخدمات الحكومية" - المديرية العامة للإقامة (مراكز خدمات الجافلية وحتا)
                </li>
                <li>• برنامج 7 نجوم لهيئة الطرق والمواصلات دبي (مركز البرشاء للإسعاد)</li>
                <li>• رفع الوعي بمواصفة الاستدامة "BS 8900" لأكثر من 50 موظف (ورشة عمل)</li>
              </ul>
            </div>

            {/* Corporate Excellence Masters */}
            <div className="mb-8 print:mb-4 border-r-4 border-slate-300 pr-4 border-l-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">مستشار التميز</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> ماجستير التميز المؤسسي الدولي
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> فبراير 2015 - نوفمبر 2016
                </Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • مشروع ADAEP "جائزة أبوظبي للتميز في أداء الجهات الحكومية" - شركة توزيع العين (تعزيز القدرة التنافسية
                  والقدرات المؤسسية)
                </li>
                <li>• مشروع SKEA "جائزة الشيخ خليفة للتميز" - شركة توزيع العين (تعزيز القدرة التنافسية)</li>
                <li>• مشروع ADAEP - سد مجالات التحسين (AFI's) لمشروع توطين، شرطة أبوظبي</li>
                <li>• مشروع ADAEP - الأرشيف الوطني – أبوظبي (تعزيز القدرات المؤسسية)</li>
                <li>
                  • مشروع إعادة التأهيل للحصول على شهادة "معترف به للتميز (R4E)" من المؤسسة الأوروبية لإدارة الجودة -
                  الأرشيف الوطني
                </li>
                <li>
                  • مشروع GSRS - سد مجالات التحسين (AFI's) - المديرية العامة للإقامة (إدارة أبوظبي، إدارة الغربية، إدارة
                  العين) لبرنامج الإمارات للتميز (7 نجوم)
                </li>
                <li>• الإطار العام للكفاءات السلوكية ودليل القادة لشركة توزيع العين</li>
                <li>• عدة مقترحات فنية تم تقديمها لجهات حكومية في الإمارات</li>
                <li>• إعداد تقارير تقييم طلبات التميز</li>
              </ul>
            </div>

            {/* Project Coordinator */}
            <div className="border-r-4 border-slate-300 pr-4 border-l-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">منسق مشاريع</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> ماجستير التميز المؤسسي الدولي
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> نوفمبر 2014 - فبراير 2015
                </Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • الإشراف والتنسيق على سير الأعمال اليومية للمشاريع من خلال مساعدة مدراء المشاريع والمدراء التنفيذيين
                </li>
                <li>• المشاركة في إعداد وتحديث ومراقبة خطط العمل والأعمال</li>
                <li>• التأكد من جمع وتحليل معلومات الإدارة ذات الصلة</li>
                <li>• تحديد المخاطر المتعلقة بالمشروع وتحليلها وترتيب أولوياتها وتخفيفها والتواصل بشأنها</li>
                <li>• التواصل مع مدير المشروع للإبلاغ عن حالة المشروع</li>
                <li>• المشاركة في تنسيق المشاريع من بدايتها حتى اكتمالها</li>
              </ul>
            </div>
          </Card>

          {/* Excellence Awards Expertise */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" /> 📚 خبرة في الجوائز والمعايير
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { code: "ZGB", name: "صفر بيروقراطية حكومية" },
                { code: "GEM 2.1", name: "دليل نموذج التميز الحكومي" },
                { code: "SCXA", name: "جائزة السعودية للتميز في تجربة العملاء (محكّم)" },
                { code: "SKEA", name: "جائزة الشيخ خليفة للتميز" },
                { code: "ADAEP", name: "جائزة أبوظبي للتميز في أداء الجهات الحكومية" },
                { code: "GSRS", name: "نظام التصنيف النجمي العالمي (7 نجوم)" },
                { code: "DGEP", name: "برنامج دبي للتميز الحكومي" },
                { code: "ICXS", name: "معيار تجربة العملاء الدولي" },
                { code: "C2E", name: "الالتزام بالتميز" },
                { code: "R4E", name: "معترف به للتميز (EFQM)" },
                { code: "جائزة عجمان", name: "برنامج عجمان للتميز" },
              ].map((award, i) => (
                <div key={i} className="bg-slate-50 rounded-lg p-3 text-center">
                  <div className="font-bold text-amber-600 text-sm">{award.code}</div>
                  <div className="text-xs text-muted-foreground">{award.name}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Common Deliverables */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-500" /> 📦 المخرجات الشائعة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {[
                "تحليل الفجوات والتقييم التجريبي",
                "رسم وتحسين رحلة العميل",
                "استراتيجية تطوير الخدمات وتحديد جميع مؤشرات الأداء",
                "خطط التشغيل وتحديد جميع مؤشرات الأداء",
                "تقييم وتصنيف الخدمات",
                "تطوير دليل معايير خدمة العملاء المخصص",
                "تطوير وتفعيل الميثاق",
                "تحديد متطلبات أعمال أنظمة CRM",
                "منهجية ونهج إشراك أصحاب المصلحة",
                "استراتيجية مشاركة الموظفين",
                "تطوير برنامج المكافآت والتقدير",
                "تطوير برامج التوجيه",
                "تطوير وتنفيذ مبادرات تحسين الخدمات",
                "تقسيم العملاء",
                "تطوير SLA و OLA",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 rounded p-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-muted-foreground print:mt-4">
        <p>📧 جميع المعلومات متاحة عند الطلب | 📱 0567889975 | ✉️ Moein-najem@hotmail.com</p>
      </footer>
    </div>
  )
}
