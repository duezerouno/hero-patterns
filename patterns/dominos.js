import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const dominos = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22126%22%20height%3D%2284%22%20viewBox%3D%220%200%20126%2084%22%3E%3Cpath%20d%3D%22M126%2083v1H0v-2h40V42H0v-2h40V0h2v40h40V0h2v40h40V0h2v83zm-2-1V42H84v40h40zM82%2042H42v40h40V42zm-50-6a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM8%2012a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm96%2012a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm-42%200a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm30-12a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM20%2054a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm12%2024a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM8%2054a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm24%200a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM8%2078a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm12%200a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm54%200a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM50%2054a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm24%200a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM50%2078a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm54-12a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm12%2012a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM92%2054a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm24%200a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM92%2078a4%204%200%201%201%200-8%204%204%200%200%201%200%208zm24-42a4%204%200%201%201%200-8%204%204%200%200%201%200%208z%22%20fill%3D%22%23${unhex(fill)}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
