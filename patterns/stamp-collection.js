import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const stampCollection = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2277%22%20height%3D%22107%22%20viewBox%3D%220%200%2077%20107%22%3E%3Cpath%20d%3D%22M46%20101a5%205%200%200%201%205%205h5a5%205%200%200%201%2010%200h5a5%205%200%200%201%205-5v-5a5%205%200%200%201%200-10v-5a5%205%200%200%201%200-10v-5a5%205%200%200%201%200-10v-5a5%205%200%200%201%200-10v-5a5%205%200%200%201%200-10v-5a5%205%200%200%201%200-10V6a5%205%200%200%201-5-5h-5a5%205%200%200%201-10%200h-5a5%205%200%200%201-10%200h-5a5%205%200%200%201-10%200h-5a5%205%200%200%201-10%200H6a5%205%200%200%201-5%205v5a5%205%200%200%201%200%2010v5a5%205%200%200%201%200%2010v5a5%205%200%200%201%200%2010v5a5%205%200%200%201%200%2010v5a5%205%200%200%201%200%2010v5a5%205%200%200%201%200%2010v5a5%205%200%200%201%205%205h5a5%205%200%200%201%2010%200h5a5%205%200%200%201%2010%200h5a5%205%200%200%201%205-5zm15-2a7%207%200%200%200-6.71%205h-1.58a7%207%200%200%200-13.42%200h-1.58a7%207%200%200%200-13.42%200h-1.58a7%207%200%200%200-13.42%200H7.71A7.01%207.01%200%200%200%203%2099.29v-1.58a7%207%200%200%200%200-13.42v-1.58a7%207%200%200%200%200-13.42v-1.58a7%207%200%200%200%200-13.42v-1.58a7%207%200%200%200%200-13.42v-1.58a7%207%200%200%200%200-13.42v-1.58A7%207%200%200%200%203%209.29V7.71A7.02%207.02%200%200%200%207.71%203h1.58a7%207%200%200%200%2013.42%200h1.58a7%207%200%200%200%2013.42%200h1.58a7%207%200%200%200%2013.42%200h1.58a7%207%200%200%200%2013.42%200h1.58A7.02%207.02%200%200%200%2074%207.71v1.58a7%207%200%200%200%200%2013.42v1.58a7%207%200%200%200%200%2013.42v1.58a7%207%200%200%200%200%2013.42v1.58a7%207%200%200%200%200%2013.42v1.58a7%207%200%200%200%200%2013.42v1.58a7%207%200%200%200%200%2013.42v1.58a7.01%207.01%200%200%200-4.71%204.71h-1.58A7%207%200%200%200%2061%2099zM12%2012h53v83H12V12zm51%2081H14V14h49v79z%22%20fill%3D%22%23${unhex(fill)}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
