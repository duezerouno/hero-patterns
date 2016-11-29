import { defaultFill, defaultOpacity } from './_defaults.js'

export const roundedPlusConnected = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2284%22%20height%3D%2284%22%20viewBox%3D%220%200%2084%2084%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M84%2023c-4.417%200-8-3.584-8-7.998V8h-7.002C64.58%208%2061%204.42%2061%200H23c0%204.417-3.584%208-7.998%208H8v7.002C8%2019.42%204.42%2023%200%2023v38c4.417%200%208%203.584%208%207.998V76h7.002C19.42%2076%2023%2079.58%2023%2084h38c0-4.417%203.584-8%207.998-8H76v-7.002C76%2064.58%2079.58%2061%2084%2061V23zM59.05%2083H43V66.95c5.054-.5%209-4.764%209-9.948V52h5.002c5.18%200%209.446-3.947%209.95-9H83v16.05c-5.054.5-9%204.764-9%209.948V74h-5.002c-5.18%200-9.446%203.947-9.95%209zm-34.1%200H41V66.95c-5.053-.502-9-4.768-9-9.948V52h-5.002c-5.184%200-9.447-3.946-9.95-9H1v16.05c5.053.502%209%204.768%209%209.948V74h5.002c5.184%200%209.447%203.946%209.95%209zm0-82H41v16.05c-5.054.5-9%204.764-9%209.948V32h-5.002c-5.18%200-9.446%203.947-9.95%209H1V24.95c5.054-.5%209-4.764%209-9.948V10h5.002c5.18%200%209.446-3.947%209.95-9zm34.1%200H43v16.05c5.053.502%209%204.768%209%209.948V32h5.002c5.184%200%209.447%203.946%209.95%209H83V24.95c-5.053-.502-9-4.768-9-9.948V10h-5.002c-5.184%200-9.447-3.946-9.95-9zM50%2050v7.002C50%2061.42%2046.42%2065%2042%2065c-4.417%200-8-3.584-8-7.998V50h-7.002C22.58%2050%2019%2046.42%2019%2042c0-4.417%203.584-8%207.998-8H34v-7.002C34%2022.58%2037.58%2019%2042%2019c4.417%200%208%203.584%208%207.998V34h7.002C61.42%2034%2065%2037.58%2065%2042c0%204.417-3.584%208-7.998%208H50z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
