export const enterpriseFleet = [
  { id: 'USC-001', model: 'Ford Transit', year: '2024', status: 'Critical', tone: 'critical', error: 'P0300', driver: 'Miguel Alvarez', route: 'R-104', mileage: '84,210', eta: '14:20', site: 'Dallas' },
  { id: 'USC-002', model: 'Ford Transit', year: '2024', status: 'Watch', tone: 'warning', error: 'P0171', driver: 'Ava Johnson', route: 'R-118', mileage: '62,340', eta: '15:05', site: 'Austin' },
  { id: 'USC-003', model: 'Nissan NV3500 HD', year: '2021', status: 'Healthy', tone: 'success', error: '—', driver: 'Noah Brown', route: 'R-220', mileage: '91,550', eta: '16:10', site: 'Houston' },
  { id: 'USC-004', model: 'NGDV', year: '2024', status: 'Critical', tone: 'critical', error: 'U0100', driver: 'Sophia Davis', route: 'R-401', mileage: '51,200', eta: '13:40', site: 'Columbus' },
  { id: 'USC-005', model: 'LLV', year: '2002', status: 'Watch', tone: 'warning', error: 'B1256', driver: 'Grace Lewis', route: 'R-515', mileage: '138,665', eta: '12:55', site: 'Newark' },
]

export const alerts = [
  { time: '08:14', title: 'P0300 on USC-001', detail: 'Random misfire detected after idle-to-load transition; manual section references ignition and fuel checks.', tone: 'critical' as const },
  { time: '08:32', title: 'PII redaction applied', detail: 'Home address and phone numbers in the fleet CSV were automatically masked before the AI prompt was generated.', tone: 'success' as const },
  { time: '09:03', title: 'Communication fault', detail: 'CAN / module sync mismatch on the NGDV test vehicle; keep engine diagnostics and cluster logs together.', tone: 'warning' as const },
]

export const manualLibrary = [
  { title: '2024 Ford Transit Owner Manual', pages: '636 pages', tag: 'ICE / EV', tone: 'info' as const },
  { title: '2021 Nissan NV Series Owner Manual', pages: '412 pages', tag: 'ICE cargo van', tone: 'neutral' as const },
  { title: 'NGDV Operator Manual', pages: '149 pages', tag: 'Delivery vehicle', tone: 'accent' as const },
  { title: 'LLV Electrical Manual', pages: '28 pages', tag: 'Electrical systems', tone: 'warning' as const },
]

export const aiMessages = [
  { role: 'assistant' as const, text: 'I matched P0420 to catalyst efficiency monitoring. Start with exhaust leak checks, then sensor validation, then catalytic converter inspection.', meta: 'Source: Ford Transit manual' },
  { role: 'user' as const, text: 'Any privacy-sensitive values in the fleet sheet?' },
  { role: 'assistant' as const, text: 'Yes. Driver addresses and phone numbers were detected and redacted before diagnostics were sent to the model. Audit logging has been recorded.', meta: 'Policy: lobster-trap redaction' },
]

export const driverSteps = [
  { time: 'Pre-trip', title: 'Walkaround', detail: 'Check tires, lights, mirrors, and cargo doors before leaving the depot.', tone: 'info' as const },
  { time: 'En route', title: 'Route R-104', detail: '3 stops due before 15:00. Keep emergency contacts available and avoid typing while driving.', tone: 'success' as const },
  { time: 'Incident', title: 'Report issue flow', detail: 'If the van shows a warning light, tap the capture button and upload a photo or short voice note.', tone: 'warning' as const },
]
