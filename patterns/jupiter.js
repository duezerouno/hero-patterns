import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const jupiter = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23${unhex(fill)}%22%20fill-opacity%3D%22${opacity}%22%20width%3D%2252%22%20height%3D%2252%22%20viewBox%3D%220%200%2052%2052%22%3E%3Cpath%20d%3D%22M0%2017.83V0h17.83a3%203%200%200%201-5.66%202H5.9A5%205%200%200%201%202%205.9v6.27a3%203%200%200%201-2%205.66zm0%2018.34a3%203%200%200%201%202%205.66v6.27A5%205%200%200%201%205.9%2052h6.27a3%203%200%200%201%205.66%200H0V36.17zM36.17%2052a3%203%200%200%201%205.66%200h6.27a5%205%200%200%201%203.9-3.9v-6.27a3%203%200%200%201%200-5.66V52H36.17zM0%2031.93v-9.78a5%205%200%200%201%203.8.72l4.43-4.43a3%203%200%201%201%201.42%201.41L5.2%2024.28a5%205%200%200%201%200%205.52l4.44%204.43a3%203%200%201%201-1.42%201.42L3.8%2031.2a5%205%200%200%201-3.8.72zm52-14.1a3%203%200%200%201%200-5.66V5.9A5%205%200%200%201%2048.1%202h-6.27a3%203%200%200%201-5.66-2H52v17.83zm0%2014.1a4.97%204.97%200%200%201-1.72-.72l-4.43%204.44a3%203%200%201%201-1.41-1.42l4.43-4.43a5%205%200%200%201%200-5.52l-4.43-4.43a3%203%200%201%201%201.41-1.41l4.43%204.43c.53-.35%201.12-.6%201.72-.72v9.78zM22.15%200h9.78a5%205%200%200%201-.72%203.8l4.44%204.43a3%203%200%201%201-1.42%201.42L29.8%205.2a5%205%200%200%201-5.52%200l-4.43%204.44a3%203%200%201%201-1.41-1.42l4.43-4.43a5%205%200%200%201-.72-3.8zm0%2052c.13-.6.37-1.19.72-1.72l-4.43-4.43a3%203%200%201%201%201.41-1.41l4.43%204.43a5%205%200%200%201%205.52%200l4.43-4.43a3%203%200%201%201%201.42%201.41l-4.44%204.43c.36.53.6%201.12.72%201.72h-9.78zm9.75-24a5%205%200%200%201-3.9%203.9v6.27a3%203%200%201%201-2%200V31.9a5%205%200%200%201-3.9-3.9h-6.27a3%203%200%201%201%200-2h6.27a5%205%200%200%201%203.9-3.9v-6.27a3%203%200%201%201%202%200v6.27a5%205%200%200%201%203.9%203.9h6.27a3%203%200%201%201%200%202H31.9z%22%2F%3E%3C%2Fsvg%3E')`
