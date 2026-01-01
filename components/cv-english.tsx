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

export function CVEnglish() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 print:p-0 print:max-w-none" dir="ltr">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-6 md:p-10 mb-6 print:rounded-none print:mb-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-4xl md:text-5xl font-bold text-slate-900 shadow-xl">
            MN
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Moein Najem</h1>
            <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-4">
              Corporate Excellence and Services Improvement Expert
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">🎯 Project Management</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">⭐ Excellence</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">📊 Quality</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">📈 Performance Management</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">🔑 KPI</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">💡 Strategy</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">🔧 Service Improvement</Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">😊 CX</Badge>
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
                <MapPin className="w-4 h-4" /> UAE - Dubai
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" /> Golden Visa
              </span>
              <a
                href="https://linkedin.com/in/moein-najem"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6 print:space-y-4">
          {/* Profile Summary */}
          <Card className="p-5 border-l-4 border-l-amber-500">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-500" /> Profile
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Moein Najem has vast project management experience in Excellence, Quality, Process documentation &
              continuous improvement, Performance Management, Customer Experience, Services design, Services
              Improvement, Process Mapping & development, and Management consulting over more than 12 years, Public
              Service Performance development, Models Implementation & Channels Assessment & Improvement. He worked with
              many UAE, KSA Government organizations to achieve both locally & globally identified accreditations
              including SCXA Saudi (as Judge), DGEP, GSRS 7 Star, ICXS, C2E, R4E, GEM2, ADAEP & SKEA.
            </p>
          </Card>

          {/* Key Stats */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" /> 📊 Key Achievements
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-600">12+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-600">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-600">10+</div>
                <div className="text-xs text-muted-foreground">Govt Entities</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-600">SCXA</div>
                <div className="text-xs text-muted-foreground">Judge</div>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-500" /> 🎓 Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-amber-500 pl-3">
                <p className="font-semibold text-sm">MBA - Project Management</p>
                <p className="text-xs text-muted-foreground">Midocean University (Current Student)</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-3">
                <p className="font-semibold text-sm">Mini MBA - Business Administration and Management, General</p>
                <p className="text-xs text-muted-foreground">International Business Management Institute (IBMI)</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-3">
                <p className="font-semibold text-sm">Bachelor's Degree - English Literature and Linguistics</p>
                <p className="text-xs text-muted-foreground">Damascus University</p>
              </div>
            </div>
          </Card>

          {/* Training Courses */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> 🏆 Training Courses
            </h2>
            <div className="space-y-2 text-sm">
              {[
                "Agile Project Management",
                "Scrum Master Certification",
                "Scaling Agile and the Team-of-Teams",
                "Creativity, Design Thinking, and Innovation for Business",
                "ICXS 2019 – Internal Assessor Training",
                "Certified Strategy Professional",
                "Certified Balanced Scorecard Professional",
                "Risk Management Professional - RMP",
                "Certified KPI Professional",
                "Strategy & Operations",
                "PMP Training Course",
                "EAT Course from EFQM (EFQM Assessor)",
                "ISO 9001-2015 Course Lloyd's Register / LRQA",
                "Preparation of Surveys and Opinion Poll Course - CMI Excellence",
                "Training the Trainers Course - CMI Excellence",
                "Guide Assertiveness Skills - Management Study Guide",
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
              <Lightbulb className="w-5 h-5 text-amber-500" /> 💼 Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Project Management",
                "Service Improvement",
                "Service Design",
                "Development Strategy & KPIs",
                "Process Mapping / Improvement",
                "Customer Experience Analysis",
                "Customer Happiness Studies",
                "Mystery Shoppers Report",
                "Reports Design",
                "MS Office Advanced",
                "Department Re-structuring",
                "Excellent Communication",
                "Conduct Focus Group",
                "Employees Training",
                "Operation - Action Plans",
                "Close Area of Improvement",
                "Create New Initiative",
                "Risk Management",
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
              <Star className="w-5 h-5 text-amber-500" /> 🏅 Awards
            </h2>
            <div className="space-y-2 text-sm">
              {[
                "Certificate of Appreciation - Minister of Interior, Ajman Police 2025",
                "Certificate of Appreciation - Minister of Interior UAE",
                "Certificate of Appreciation - Dubai Municipality",
                "Certificate of Appreciation - Dubai Health Authority",
                "Unsung Hero Award - Ethos Integrated Solutions",
                "Best Employee Consultancy Department - Ethos Integrated Solutions",
                "Employee of the Year 2020 - Ethos Integrated Solutions",
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
              <Globe className="w-5 h-5 text-amber-500" /> 🗣️ Languages
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Arabic</span>
                  <span className="text-xs text-muted-foreground">Native</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full">
                  <div className="h-full w-full bg-amber-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">English</span>
                  <span className="text-xs text-muted-foreground">Fluent</span>
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
              <Heart className="w-5 h-5 text-amber-500" /> 📋 Personal Info
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-medium">Married</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nationality:</span>
                <span className="font-medium">Syrian</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium">Dubai, UAE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Driving License:</span>
                <span className="font-medium">UAE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date of Birth:</span>
                <span className="font-medium">01/01/1988</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Experience */}
        <div className="lg:col-span-2 space-y-6 print:space-y-4">
          <Card className="p-5">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-amber-500" /> 💼 Professional Experience
            </h2>

            {/* IMPACT iN */}
            <div className="mb-8 print:mb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Excellence and Quality Manager</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> IMPACT iN
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> July 2024 - Current
                </Badge>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 mb-3">
                <p className="text-sm text-muted-foreground mb-3">
                  Manage & implement Consultancy Projects and all human resources for the company:
                </p>
                <div className="grid gap-3">
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-700 text-xs">✅ Completed</Badge>
                      <span className="font-medium text-sm">Ajman Excellence Award & GSRS (7 Star Program)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Department of Land & Real Estate Regulation – Ajman. 2024. Result: 6 Star for Customer Happiness
                      Center and 5 Star for Website
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-700 text-xs">🔄 Ongoing</Badge>
                      <span className="font-medium text-sm">GSRS (7 Star Program) - New Standard</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      MOI - Ajman Police. Full implementation (assessment, consultancy, development). 2024 until Current
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-700 text-xs">✅ Certified</Badge>
                      <span className="font-medium text-sm">ISO 26000:2010 & PAS 7070:2016</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Social Responsibility Management System and Benchmarking Process Management System - Department of
                      Ports and Customs – Government of Ajman
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-700 text-xs">🔄 Ongoing</Badge>
                      <span className="font-medium text-sm">GSRS (7 Star Program) - MOIAT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ministry of Industrial and Advanced Technology - Full implementation (assessment, consultancy,
                      development)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-700 text-xs">🔄 Ongoing</Badge>
                      <span className="font-medium text-sm">ZGB - Zero Bureaucracy Government</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Implementing ZGB criteria to enhance processes and services for MOIAT - Ministry of Industrial and
                      Advanced Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BSI Contract */}
            <div className="mb-8 print:mb-4 border-l-4 border-slate-300 pl-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Global Star Rating Expert & ZGB Lead Assessor</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> BSI (Contract)
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> August 2024
                </Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Global Star Rating Expert: Training the Assessor team & Final Reports technical review</li>
                <li>• ZGB "Zero Bureaucracy Government Lead Assessor in First cycle"</li>
                <li>• Assess Gov.Entities based on Zero Bureaucracy Government criteria</li>
              </ul>
            </div>

            {/* Ministry of Health */}
            <div className="mb-8 print:mb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Corporate Excellence and Services Improvement Expert
                  </h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Ministry of Health & Prevention
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Nov 2022 - Jul 2024
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">151</div>
                  <div className="text-xs text-muted-foreground">Services Redesigned</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">9</div>
                  <div className="text-xs text-muted-foreground">Transformational Paths</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">2</div>
                  <div className="text-xs text-muted-foreground">Sections Established</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      1
                    </span>
                    Project Manager - Re-engineering Services
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pl-7">
                    <li>• Redesigning around 151 services using service design and design thinking</li>
                    <li>
                      • Re-engineering services leveraging inputs from customers, partners, employees, service owners &
                      leadership
                    </li>
                    <li>
                      • Improving and developing services to facilitate the process of implementing digital
                      e-transformation
                    </li>
                    <li>• Ensuring compliance with requirements of PMO and TDRA</li>
                    <li>
                      • Revamp and automate all services with modern and streamlined solution that increases efficiency
                    </li>
                    <li>• Utilize design thinking to evolve the perception of MOHAP's services</li>
                    <li>• Designing As-Is User Journeys and identify problems and pain-points faced by customers</li>
                    <li>• Designing To-Be Customer Journeys, Service Blueprints and process flow</li>
                    <li>
                      • Work on zero-government bureaucracy project (reducing steps, time duration, procedures,
                      documents, requirements & increase integrations)
                    </li>
                    <li>• Preparing the tool used to measure bureaucracy in services</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      2
                    </span>
                    Establishing Service Leading Section (Strategy & Future Dept)
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pl-7">
                    <li>• Preparing SOPs for the section "Operations Manual"</li>
                    <li>• Implement Service Development Guide 2.0 on MOHAP services</li>
                    <li>• Work on transformational paths 9 services (first, second, third cycle) for services 2.0</li>
                    <li>
                      • Working on (Akram) post-death procedures bundle with federal authorities and Prime Minister's
                      Office
                    </li>
                    <li>• Studying service procedures and their links with federal and local entities</li>
                    <li>• Prepare future state and to-be state of the bundle</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      3
                    </span>
                    Establishing Sustainability & Social Responsibility Section
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pl-7">
                    <li>• Preparing SOPs and Operations Manual for the section</li>
                    <li>
                      • Suggesting social responsibility initiatives and following up implementation with partners and
                      Representative offices
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      4
                    </span>
                    Star Sustainability Initiative - GSRS (Jan 2023)
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pl-7">
                    <li>• Reviewing feedback reports issued by Prime Minister's Office for 7 Star</li>
                    <li>• Conducting internal/self-evaluation on semi-annual basis and preparing evaluation reports</li>
                    <li>• Suggesting and implementing development initiatives & preparing results reports</li>
                    <li>• Coordinating with "High Committee" for implementing 7 Star</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      5
                    </span>
                    GEM 2.1 "Government Excellence Model Manual"
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 pl-7">
                    <li>• Working to implement Pillars and Criteria of the award for all MOHAP departments</li>
                    <li>• Preparing submission for: Vision Realization, Distinctive Value, Enablers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ethos Integrated Solutions */}
            <div className="mb-8 print:mb-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Advisory Learning & Development Manager</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Ethos Integrated Solutions
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> 2017 - Nov 2022
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">21+</div>
                  <div className="text-xs text-muted-foreground">Advisory Projects</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">5</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-600">100%</div>
                  <div className="text-xs text-muted-foreground">Project Success</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                Managing all advisory and training projects in the company (Proposals, Resources, Financial). List of
                Projects:
              </p>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-3">🏢 Key Projects Managed:</h4>
                <div className="grid gap-2 text-xs">
                  {[
                    {
                      year: "2020/2021",
                      project:
                        "Ministry of Interior - GSRS 7 Star (Ajman Police 4 Centers, RAK Police 4 Centers, Sharjah Police 4 Centers, Fujairah Police 1 Center, General Admin Happiness Call Center)",
                    },
                    {
                      year: "2020/2021",
                      project:
                        "Department of Land & Real Estate Regulation - Ajman - GSRS 7 Star New Standard full implementation",
                    },
                    {
                      year: "2020",
                      project:
                        "Dubai Municipality - DGEP & GSRS 7 Star (4 Municipality Centers, Call Centre, Central Laboratory, Veterinary Services, Abattoirs Section + CX improvement on 14 services)",
                    },
                    {
                      year: "2020",
                      project: "Roads Transport Authority - Dubai - GSRS 7 Star (Barsha/Deira/Um El-Romol Centers)",
                    },
                    {
                      year: "2019",
                      project:
                        "Dubai Health Authority - DGEP & GSRS 7 Star (Health Regulation 1 Center + Medical Fitness 17 Centers + Customer Charter development)",
                    },
                    {
                      year: "2018/2019",
                      project:
                        "Department of Land & Real Estate - Ajman - GSRS 7 Star Old Standard full implementation",
                    },
                    { year: "2018", project: "Abu Dhabi Municipality - Gap Assessment GSRS 7 Star" },
                    {
                      year: "2017/2018",
                      project:
                        "Federal Authority for Identity and Citizenship - GSRS 7 Star (Barsha, Umm Al Quwain, Ajman, RAK Centers + VG-ICA Validation Gateway services)",
                    },
                    { year: "2017/2018", project: "RAK Public Prosecution - GSRS 7 Star full implementation" },
                    { year: "2017", project: "RAK Police - GSRS 7 Star full implementation" },
                    {
                      year: "2017",
                      project:
                        "Dubai Police - GSRS 7 Star (Al-Qusais, Al-Barsha, Al-Rashidiya, Al-Raffa Police Stations)",
                    },
                    {
                      year: "2017",
                      project:
                        "General Directorate of Residency and Foreigner Affairs – Abu Dhabi Police - Gap analysis GSRS 7 Star",
                    },
                    {
                      year: "Various",
                      project:
                        "MOHAP GSRS Project (3 pillars: Consultancy, Technology, Measurement), EHS GSRS (2 pillars), MOI GSRS, Abu Dhabi Police GSRS, RTA ICXS Internal Assessor Training, Ajman Municipality Gap analysis ICXS",
                    },
                    {
                      year: "Various",
                      project:
                        "Senior Consultant: 'Facilitate business procedures and simplify government requirements and reduction 30%' - Dubai Executive Council-City Makers, DCAA",
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
            <div className="mb-8 print:mb-4 border-l-4 border-slate-300 pl-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Excellence Consultant</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> PDCA Management Consultancy
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Nov 2016 - Apr 2017
                </Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • DGEP "Dubai Government Excellence" Project - General Directorate of Residency and Foreigner
                  Affairs-Dubai
                </li>
                <li>
                  • "Emirates Program for Excellence in Government Services" - General Directorate of Residency
                  (Jaffiliya and Hatta service centers)
                </li>
                <li>• GSRS 7 Star Program for RTA Dubai (Al-Barsha Happiness Center)</li>
                <li>
                  • Raised awareness of sustainability specification "BS 8900" to more than 50 employees (workshop)
                </li>
              </ul>
            </div>

            {/* Corporate Excellence Masters */}
            <div className="mb-8 print:mb-4 border-l-4 border-slate-300 pl-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Excellence Consultant</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Corporate Excellence Masters International
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Feb 2015 - Nov 2016
                </Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • ADAEP "Abu Dhabi Award for Excellence in Government Performance" - Alain Distribution Company
                  (enhance competitiveness and institutional capacities)
                </li>
                <li>
                  • SKEA "The Sheikh Khalifa Excellence Award" - Alain Distribution Company (enhance competitiveness)
                </li>
                <li>• ADAEP - Close Areas of Improvement (AFI's) of Taw-teen, Abu Dhabi Police</li>
                <li>• ADAEP - National Archives – Abu Dhabi (enhance institutional capacities)</li>
                <li>
                  • Project for rehabilitation certificate "Recognized for Excellence (R4E)" - European Foundation for
                  Quality Management - National Archives
                </li>
                <li>
                  • GSRS - Close Areas of Improvement (AFI's) - General Directorate of Residency (Abu Dhabi, AL Gharbia,
                  AL Ain) for Emirates Program for Excellence (7 Star)
                </li>
                <li>
                  • General Framework of Behavioral Competencies and Leaders Guide for AL Ain Distribution Company
                </li>
                <li>• Several technical proposals submitted for government entities in UAE</li>
                <li>• Prepare assessment reports of Excellence Submissions</li>
              </ul>
            </div>

            {/* Project Coordinator */}
            <div className="border-l-4 border-slate-300 pl-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Project Coordinator</h3>
                  <p className="text-amber-600 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Corporate Excellence Masters International
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Nov 2014 - Feb 2015
                </Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • Overseeing and coordinating day-to-day running of projects by assisting project managers and senior
                  managers
                </li>
                <li>• Involved in development, updating and monitoring of business and action plans</li>
                <li>• Ensuring that relevant management information is captured and analyzed</li>
                <li>• Identify, analyze, prioritize, mitigate, and communicate project risks</li>
                <li>• Communicating with project manager to report on project status</li>
                <li>• Coordinating projects from inception to completion</li>
              </ul>
            </div>
          </Card>

          {/* Excellence Awards Expertise */}
          <Card className="p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" /> 📚 Awards & Standards Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { code: "ZGB", name: "Zero Bureaucracy Government" },
                { code: "GEM 2.1", name: "Government Excellence Model Manual" },
                { code: "SCXA", name: "Saudi CX Excellence Award (Judge)" },
                { code: "SKEA", name: "Sheikh Khalifa Excellence Award" },
                { code: "ADAEP", name: "Abu Dhabi Award for Excellence in Government Performance" },
                { code: "GSRS", name: "Global Star Rating System (7 Star Program)" },
                { code: "DGEP", name: "Dubai Government Excellence Program" },
                { code: "ICXS", name: "International Customer Experience Standard" },
                { code: "C2E", name: "Committed to Excellence" },
                { code: "R4E", name: "Recognized for Excellence (EFQM)" },
                { code: "Ajman Excellence", name: "Ajman Excellence Program" },
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
              <Users className="w-5 h-5 text-amber-500" /> 📦 Common Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {[
                "Gap analysis & mock assessment",
                "Customer Journey Mapping & Improvement",
                "Services development strategy and identify all KPIs",
                "Operation plan and identify all KPIs",
                "Services assessment and classification",
                "Development of customized customer service standards guide",
                "Charter development and activation",
                "CRM systems business requirements definition",
                "Stakeholders' engagement methodology and approach",
                "Employee engagement strategy",
                "Development of reward and recognition program",
                "Mentoring programs development",
                "Services improvement initiatives development & implementation",
                "Customer segmentation",
                "Development of SLA & OLA",
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
        <p>📧 All information available upon request | 📱 0567889975 | ✉️ Moein-najem@hotmail.com</p>
      </footer>
    </div>
  )
}
