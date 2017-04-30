import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const churchOnSunday = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cpath%20d%3D%22M77.17%200H80v2.83l-.1.1A39.9%2039.9%200%200%201%2074.64%2020a39.9%2039.9%200%200%201%205.24%2017.06l.11.11v2.89c-.01%206.9-1.8%2013.79-5.35%2019.94A39.96%2039.96%200%200%201%2080%2079.94V80h-2.83L66.84%2069.66a39.83%2039.83%200%200%201-24.1%2010.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82%2080H0v-.06c.01-6.9%201.8-13.8%205.35-19.94A39.96%2039.96%200%200%201%200%2040.06v-2.89l.1-.1A39.9%2039.9%200%200%201%205.36%2020%2039.9%2039.9%200%200%201%20.1%202.94L0%202.83V0h2.83l-.1.1a39.83%2039.83%200%200%201%2024.1%2010.24L37.18%200H40c0%206.92-1.78%2013.83-5.35%2020A39.96%2039.96%200%200%201%2040%2040c0-6.92%201.78-13.83%205.35-20A39.96%2039.96%200%200%201%2040%200h2.83l10.33%2010.34A39.83%2039.83%200%200%201%2077.26.09L77.17%200zm.77%2077.94c-.3-5.52-1.8-11-4.49-16a40.18%2040.18%200%200%201-5.17%206.34l9.66%209.66zm-12.52-9.7l-6.83-6.83-5.46%205.46-1.41%201.41-9.66%209.66c8.4-.45%2016.69-3.68%2023.36-9.7zm-23.07%206.58l7.99-7.98a40.05%2040.05%200%200%201-3.79-4.9%2037.88%2037.88%200%200%200-4.2%2012.88zM47.68%2060a37.98%2037.98%200%200%200%204.07%205.42L57.17%2060l-5.42-5.42A38%2038%200%200%200%2047.68%2060zm2.66-6.84a40.06%2040.06%200%200%200-3.79%204.9%2037.88%2037.88%200%200%201-4.2-12.88l7.99%207.98zm1.38-1.44l1.41%201.41%205.46%205.46%206.83-6.84a37.85%2037.85%200%200%200-23.36-9.7l9.66%209.67zM60%2060l6.87%206.87A38.1%2038.1%200%200%200%2072.32%2060a38.11%2038.11%200%200%200-5.45-6.87L60%2060zm-14.65%200a39.9%2039.9%200%200%200-5.24%2017.06l-.11.11-.1-.1A39.9%2039.9%200%200%200%2034.64%2060a39.9%2039.9%200%200%200%205.24-17.06l.11-.11.1.1A39.9%2039.9%200%200%200%2045.36%2060zm9.23-48.25a37.85%2037.85%200%200%201%2023.36-9.7l-9.66%209.67-1.41%201.41-5.46%205.46-6.83-6.84zm13.67%2013.67L62.83%2020l5.42-5.42A38%2038%200%200%201%2072.32%2020a37.98%2037.98%200%200%201-4.07%205.42zm5.2-3.47a40.05%2040.05%200%200%201-3.79%204.89l7.99%207.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58%204.92l1.41%201.41%209.66%209.66a37.85%2037.85%200%200%201-23.36-9.7l6.83-6.83%205.46%205.46zM53.13%2013.13L60%2020l-6.87%206.87A38.11%2038.11%200%200%201%2047.68%2020a38.1%2038.1%200%200%201%205.45-6.87zm-1.41-1.41l-9.66-9.66c.3%205.52%201.8%2011%204.49%2016a40.18%2040.18%200%200%201%205.17-6.34zm-9.66%2026.22c.3-5.52%201.8-11%204.49-16a40.18%2040.18%200%200%200%205.17%206.34l-9.66%209.66zm26.22%2013.78l9.66-9.66c-.3%205.52-1.8%2011-4.49%2016a40.18%2040.18%200%200%200-5.17-6.34zm8.98-11.81L66.84%2050.34a39.83%2039.83%200%200%200-24.1-10.25l10.42-10.43a39.83%2039.83%200%200%200%2024.1%2010.25zm-7.6-26.75a40.06%2040.06%200%200%201%203.79%204.9%2037.88%2037.88%200%200%200%204.2-12.88l-7.99%207.98zm-31.72%2028.9c-8.4.45-16.69%203.68-23.36%209.7l6.83%206.83%205.46-5.46%201.41-1.41%209.66-9.66zM22.83%2060l5.42%205.42c1.54-1.7%202.9-3.52%204.07-5.42a38%2038%200%200%200-4.07-5.42L22.83%2060zm5.45%208.28l-1.41-1.41-5.46-5.46-6.83%206.84a37.85%2037.85%200%200%200%2023.36%209.7l-9.66-9.67zm9.37%206.54l-7.99-7.98a40.05%2040.05%200%200%200%203.79-4.9%2037.88%2037.88%200%200%201%204.2%2012.88zM20%2060l-6.87-6.87A38.11%2038.11%200%200%200%207.68%2060a38.11%2038.11%200%200%200%205.45%206.87L20%2060zm17.26-19.9L26.84%2029.65A39.83%2039.83%200%200%201%202.74%2039.9l10.42%2010.43a39.83%2039.83%200%200%201%2024.1-10.25zm-35.2%201.96l9.66%209.66a40.18%2040.18%200%200%200-5.17%206.33c-2.7-5-4.2-10.47-4.5-16zm4.49%2019.89c-2.7%205-4.2%2010.47-4.5%2016l9.67-9.67a40.18%2040.18%200%200%201-5.17-6.33zm31.1-16.77c-.61%204.45-2.01%208.82-4.2%2012.87a40.06%2040.06%200%200%200-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7%205%204.2%2010.47%204.5%2016l-9.67-9.67c1.97-1.97%203.7-4.1%205.17-6.33zm-14.86-.54l6.83%206.84a37.85%2037.85%200%200%201-23.36%209.7l9.66-9.67%201.41-1.41%205.46-5.46zm-8.25%205.43l-7.99%207.98c.61-4.45%202.01-8.82%204.2-12.87a40.04%2040.04%200%200%200%203.79%204.89zm1.41-1.42A37.99%2037.99%200%200%201%207.68%2020a38%2038%200%200%201%204.07-5.42L17.17%2020l-5.42%205.42zm-5.2-7.37a40.04%2040.04%200%200%201%203.79-4.89L2.35%205.18c.61%204.45%202.01%208.82%204.2%2012.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85%2037.85%200%200%201%2023.36%209.7l-6.83%206.83-5.46-5.46zm13.74%2013.74L20%2020l6.87-6.87A38.1%2038.1%200%200%201%2032.32%2020a38.1%2038.1%200%200%201-5.45%206.87zm6.58-8.82a40.18%2040.18%200%200%200-5.17-6.33l9.66-9.66c-.3%205.52-1.8%2011-4.49%2016z%22%20fill%3D%22%23${unhex(fill)}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
