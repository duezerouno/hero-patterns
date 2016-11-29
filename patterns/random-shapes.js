import { defaultFill, defaultOpacity } from './_defaults.js'

export const randomShapes = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M11%200l5%2020H6l5-20zm42%2031a3%203%200%201%200%200-6%203%203%200%200%200%200%206zM0%2072h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0%2056h40v4H0v-4zm63-25a3%203%200%201%200%200-6%203%203%200%200%200%200%206zm10%200a3%203%200%201%200%200-6%203%203%200%200%200%200%206zM53%2041a3%203%200%201%200%200-6%203%203%200%200%200%200%206zm10%200a3%203%200%201%200%200-6%203%203%200%200%200%200%206zm10%200a3%203%200%201%200%200-6%203%203%200%200%200%200%206zm-30%200a3%203%200%201%200%200-6%203%203%200%200%200%200%206zm-28-8a5%205%200%200%200-10%200h10zm10%200a5%205%200%200%201-10%200h10zM56%205a5%205%200%200%200-10%200h10zm10%200a5%205%200%200%201-10%200h10zm-3%2046a3%203%200%201%200%200-6%203%203%200%200%200%200%206zm10%200a3%203%200%201%200%200-6%203%203%200%200%200%200%206zM21%200l5%2020H16l5-20zm43%2064v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36%2013h4v4h-4v-4zm4%204h4v4h-4v-4zm-4%204h4v4h-4v-4zm8-8h4v4h-4v-4z%22%2F%3E%3C%2Fsvg%3E')`
