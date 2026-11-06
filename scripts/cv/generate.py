"""Generate the public, text-selectable two-page CV. Requires reportlab."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[2]
FONT_DIR = Path('/usr/share/fonts/truetype/dejavu')
pdfmetrics.registerFont(TTFont('CV', str(FONT_DIR / 'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('CV-Bold', str(FONT_DIR / 'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('CV', normal='CV', bold='CV-Bold', italic='CV', boldItalic='CV-Bold')
INK = colors.HexColor('#172631')
MUTED = colors.HexColor('#50616c')
styles = {
    'name': ParagraphStyle('name', fontName='CV-Bold', fontSize=24, leading=29, textColor=INK, spaceAfter=5),
    'subtitle': ParagraphStyle('subtitle', fontName='CV', fontSize=12, leading=18, textColor=MUTED, spaceAfter=5),
    'body': ParagraphStyle('body', fontName='CV', fontSize=9.5, leading=14, textColor=INK, spaceAfter=6),
    'small': ParagraphStyle('small', fontName='CV', fontSize=8.8, leading=13, textColor=MUTED, spaceAfter=7),
    'section': ParagraphStyle('section', fontName='CV-Bold', fontSize=10, leading=15, textColor=INK, spaceBefore=13, spaceAfter=8, keepWithNext=True),
    'role': ParagraphStyle('role', fontName='CV-Bold', fontSize=10, leading=15, textColor=INK, spaceAfter=3, keepWithNext=True),
    'bullet': ParagraphStyle('bullet', fontName='CV', fontSize=9.5, leading=14, textColor=INK, leftIndent=12, firstLineIndent=-10, spaceAfter=5),
}
story = []
def p(text, style='body'):
    story.append(Paragraph(text, styles[style]))
def section(text): p(text.upper(), 'section')
def bullet(text): p('&#8226; ' + text, 'bullet')
def group(title, text):
    p(title, 'role')
    p(text)

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#d9e0e4'))
    canvas.line(42, 39, A4[0] - 42, 39)
    canvas.setFillColor(MUTED)
    canvas.setFont('CV', 8)
    canvas.drawString(42, 25, 'Christian Oliver | Odoo / ERP Developer')
    canvas.drawRightString(A4[0] - 42, 25, str(doc.page))
    canvas.restoreState()

p('Christian Oliver', 'name')
p('Odoo / ERP Developer', 'subtitle')
p('East Jakarta, Indonesia | +6285880036506 | <link href="mailto:oliolio343@gmail.com">oliolio343@gmail.com</link><br/><link href="https://www.linkedin.com/in/christian-oliver-04914bb6">linkedin.com/in/christian-oliver-04914bb6</link><br/>Portfolio: <link href="https://chrisoliver.online/">chrisoliver.online</link>', 'small')
section('Profile')
p('Odoo developer with professional experience customizing and maintaining Odoo 14 across Accounting, Inventory, Purchase, Sales, RMA, Construction reporting and HR. Work with Python, PostgreSQL, XML, QWeb, JavaScript and the Odoo ORM. Develop Texarium ERP as a personal Odoo 18 Community project focused on approval governance, connected workflows and company-branch controls.')
section('Professional experience')
p('Odoo Developer | HashMicro', 'role')
p('Feb 2024 - Present | Remote', 'small')
bullet('Develop and customize business workflows, operational controls and ERP integrations; investigate and resolve production issues.')
bullet('Support Accounting, Inventory, Purchase, Sales, reporting and multi-company processes using Python, PostgreSQL, XML, QWeb and JavaScript.')
bullet('Customize construction/project job order reports and signature layouts, RMA and return workflows, HR overtime editing for approvers and payslip report layouts.')
bullet('Contribute targeted MRP production-plan view fixes, workflow validations and technical maintenance.')
p('Odoo Developer | PT. Sama Sama Sukses', 'role')
p('Aug 2021 - Jan 2024 | Tangerang, Banten', 'small')
bullet('Customized Odoo 14 modules, views, reports and workflows for operational requirements.')
bullet('Applied Odoo and CSS development skills to improve ERP usability and workflow consistency.')
p('Research and Development Engineer | PT. SuryaSukses Adi Perkasa', 'role')
p('Feb 2021 - Jul 2022 | Cibitung, West Java', 'small')
bullet('Developed product concepts, product designs and pallet drawings for research and development needs.')
section('Technical skills')
p('<b>Platforms:</b> Odoo 14 (professional), Odoo 18 Community (personal project)<br/><b>Development:</b> Python, PostgreSQL, Odoo ORM, XML, QWeb, JavaScript, OWL, Git<br/><b>Business areas:</b> Accounting, Inventory, Purchase, Sales, approvals, multi-company, multi-currency, RMA, HR workflows, Construction and payroll reporting<br/><b>Additional:</b> HTML/CSS, Laravel, Filament, REST/API concepts, Windows/Linux')
section('Education')
p('<b>Universitas Mercu Buana</b><br/>Bachelor Degree, Information Technology | 2015 - 2020')

story.append(PageBreak())
p('Projects & Contributions', 'name')
p('Christian Oliver | Odoo / ERP Developer', 'subtitle')
section('Selected professional contributions - Odoo 14')
p('The following contributions describe specific customizations and maintenance work in professional roles.', 'small')
group('Construction & Job Orders', 'Customized construction/project job order reports, including signature layouts and work order reporting. Contributed targeted fixes to MRP production-plan views.')
group('RMA & Return Management', 'Customized RMA and return-related inventory workflows, with stock traceability and return handling.')
group('Human Resources & Payroll Reports', 'Customized overtime request editing for approvers and payslip report layouts; contributed HR assessment/psychometric workflows and time-off reporting and views.')
group('Accounting & Finance', 'Payment and reconciliation customizations for partial payments, exchange rates, FX gain/loss and bank fees; stock valuation, Anglo-Saxon accounting, invoice amount-due fixes, down payments and VAT handling.')
group('Inventory, Purchase & Sales', 'Multi-UoM and lot-based counting, reservations, picking approvals, FIFO valuation fixes, vendor pricelists, tax-aware purchase pricing, product/category access, RFQ/PO numbering and intercompany Purchase-to-Sales automation.')
group('Reporting & Technical Maintenance', 'QWeb/PDF reports, receiving PLAN-versus-ACT dashboards, approval notifications and production troubleshooting across ORM, XML, security rules and PostgreSQL.')
section('Personal project - Texarium ERP')
p('Odoo 18 Community | Python | PostgreSQL | OWL / JavaScript', 'small')
p('A personal learning and portfolio project developed and tested locally, separate from professional client implementations.')
bullet('<b>Approval & Document Governance:</b> By User and By Hierarchy approver pools, configurable minimum approvals, rejection reasons, retained decision history and linked PO revisions requiring fresh approval.')
bullet('<b>Company-Branch Controls:</b> two companies (Indonesia and Singapore), six custom branches, separate scope selectors and Company-Branch-Warehouse permissions on supported models.')
bullet('<b>Connected Operations:</b> procurement, quality inspection, supplier returns, vendor billing, payments and bank reconciliation; cash advance, petty cash, purchase budgets and Stock Ledger reporting.')
bullet('<b>Custom Workspace:</b> branded login, navigation, form layouts and operational dashboards. Case studies use local demo screenshots and scoped validation evidence.')

out = ROOT / 'public/cv.pdf'
SimpleDocTemplate(str(out), pagesize=A4, leftMargin=42, rightMargin=42, topMargin=38, bottomMargin=50, title='Christian Oliver - Odoo / ERP Developer', author='Christian Oliver').build(story, onFirstPage=footer, onLaterPages=footer)
print(out)
