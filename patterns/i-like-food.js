import {defaultFill, defaultOpacity} from './_defaults'

export const iLikeFood = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22260%22%20height%3D%22260%22%20viewBox%3D%220%200%20260%20260%22%3E%3Cg%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M24.37%2016c.2.65.39%201.32.54%202h-3.74l1.17%202.34.45.9-.24.11V28a5%205%200%200%201-2.23%208.94l-.02.06a8%208%200%200%201-7.75%206h-20a8%208%200%200%201-7.74-6l-.02-.06A5%205%200%200%201-17.45%2028v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01%2023.01%200%200%201%2044.37-2zm-36.82%202a1%201%200%200%200-.44.1l-3.1%201.56.89%201.79%201.31-.66a3%203%200%200%201%202.69%200l2.2%201.1a1%201%200%200%200%20.9%200l2.21-1.1a3%203%200%200%201%202.69%200l2.2%201.1a1%201%200%200%200%20.9%200l2.21-1.1a3%203%200%200%201%202.69%200l2.2%201.1a1%201%200%200%200%20.86.02l2.88-1.27a3%203%200%200%201%202.43%200l2.88%201.27a1%201%200%200%200%20.85-.02l3.1-1.55-.89-1.79-1.42.71a3%203%200%200%201-2.56.06l-2.77-1.23a1%201%200%200%200-.4-.09h-.01a1%201%200%200%200-.4.09l-2.78%201.23a3%203%200%200%201-2.56-.06l-2.3-1.15a1%201%200%200%200-.45-.11h-.01a1%201%200%200%200-.44.1L.9%2019.22a3%203%200%200%201-2.69%200l-2.2-1.1a1%201%200%200%200-.45-.11h-.01a1%201%200%200%200-.44.1l-2.21%201.11a3%203%200%200%201-2.69%200l-2.2-1.1a1%201%200%200%200-.45-.11h-.01zm0-2h-4.9a21.01%2021.01%200%200%201%2039.61%200h-2.09l-.06-.13-.26.13h-32.31zm30.35%207.68l1.36-.68h1.3v2h-36v-1.15l.34-.17%201.36-.68h2.59l1.36.68a3%203%200%200%200%202.69%200l1.36-.68h2.59l1.36.68a3%203%200%200%200%202.69%200L2.26%2023h2.59l1.36.68a3%203%200%200%200%202.56.06l1.67-.74h3.23l1.67.74a3%203%200%200%200%202.56-.06zM-13.82%2027l16.37%204.91L18.93%2027h-32.75zm-.63%202h.34l16.66%205%2016.67-5h.33a3%203%200%201%201%200%206h-34a3%203%200%201%201%200-6zm1.35%208a6%206%200%200%200%205.65%204h20a6%206%200%200%200%205.66-4H-13.1zM284.37%2016c.2.65.39%201.32.54%202h-3.74l1.17%202.34.45.9-.24.11V28a5%205%200%200%201-2.23%208.94l-.02.06a8%208%200%200%201-7.75%206h-20a8%208%200%200%201-7.74-6l-.02-.06a5%205%200%200%201-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01%2023.01%200%200%201%2044.37-2zm-36.82%202a1%201%200%200%200-.44.1l-3.1%201.56.89%201.79%201.31-.66a3%203%200%200%201%202.69%200l2.2%201.1a1%201%200%200%200%20.9%200l2.21-1.1a3%203%200%200%201%202.69%200l2.2%201.1a1%201%200%200%200%20.9%200l2.21-1.1a3%203%200%200%201%202.69%200l2.2%201.1a1%201%200%200%200%20.86.02l2.88-1.27a3%203%200%200%201%202.43%200l2.88%201.27a1%201%200%200%200%20.85-.02l3.1-1.55-.89-1.79-1.42.71a3%203%200%200%201-2.56.06l-2.77-1.23a1%201%200%200%200-.4-.09h-.01a1%201%200%200%200-.4.09l-2.78%201.23a3%203%200%200%201-2.56-.06l-2.3-1.15a1%201%200%200%200-.45-.11h-.01a1%201%200%200%200-.44.1l-2.21%201.11a3%203%200%200%201-2.69%200l-2.2-1.1a1%201%200%200%200-.45-.11h-.01a1%201%200%200%200-.44.1l-2.21%201.11a3%203%200%200%201-2.69%200l-2.2-1.1a1%201%200%200%200-.45-.11h-.01zm0-2h-4.9a21.01%2021.01%200%200%201%2039.61%200h-2.09l-.06-.13-.26.13h-32.31zm30.35%207.68l1.36-.68h1.3v2h-36v-1.15l.34-.17%201.36-.68h2.59l1.36.68a3%203%200%200%200%202.69%200l1.36-.68h2.59l1.36.68a3%203%200%200%200%202.69%200l1.36-.68h2.59l1.36.68a3%203%200%200%200%202.56.06l1.67-.74h3.23l1.67.74a3%203%200%200%200%202.56-.06zM246.18%2027l16.37%204.91L278.93%2027h-32.75zm-.63%202h.34l16.66%205%2016.67-5h.33a3%203%200%201%201%200%206h-34a3%203%200%201%201%200-6zm1.35%208a6%206%200%200%200%205.65%204h20a6%206%200%200%200%205.66-4H246.9zM159.5%2021.02A9%209%200%200%200%20151%2015h-42a9%209%200%200%200-8.5%206.02%206%206%200%200%200%20.02%2011.96A8.99%208.99%200%200%200%20109%2045h42a9%209%200%200%200%208.48-12.02%206%206%200%200%200%20.02-11.96zM151%2017h-42a7%207%200%200%200-6.33%204h54.66a7%207%200%200%200-6.33-4zm-9.34%2026a8.98%208.98%200%200%200%203.34-7h-2a7%207%200%200%201-7%207h-4.34a8.98%208.98%200%200%200%203.34-7h-2a7%207%200%200%201-7%207h-4.34a8.98%208.98%200%200%200%203.34-7h-2a7%207%200%200%201-7%207h-7a7%207%200%201%201%200-14h42a7%207%200%201%201%200%2014h-9.34zM109%2027a9%209%200%200%200-7.48%204H101a4%204%200%201%201%200-8h58a4%204%200%200%201%200%208h-.52a9%209%200%200%200-7.48-4h-42zM39%20115a8%208%200%201%200%200-16%208%208%200%200%200%200%2016zm6-8a6%206%200%201%201-12%200%206%206%200%200%201%2012%200zm-3-29v-2h8v-6H40a4%204%200%200%200-4%204v10H22l-1.33%204-.67%202h2.19L26%20130h26l3.81-40H58l-.67-2L56%2084H42v-6zm-4-4v10h2V74h8v-2h-8a2%202%200%200%200-2%202zm2%2012h14.56l.67%202H22.77l.67-2H40zm13.8%204H24.2l3.62%2038h22.36l3.62-38zM129%2092h-6v4h-6v4h-6v14h-3l.24%202%203.76%2032h36l3.76-32%20.24-2h-3v-14h-6v-4h-6v-4h-8zm18%2022v-12h-4v4h3v8h1zm-3%200v-6h-4v6h4zm-6%206v-16h-4v19.17c1.6-.7%202.97-1.8%204-3.17zm-6%203.8V100h-4v23.8a10.04%2010.04%200%200%200%204%200zm-6-.63V104h-4v16a10.04%2010.04%200%200%200%204%203.17zm-6-9.17v-6h-4v6h4zm-6%200v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6%200v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6%204v-4h-4v8h1v-4h3zm7%2024a12%2012%200%200%200%2011.83-10h7.92l-3.53%2030h-32.44l-3.53-30h7.92A12%2012%200%200%200%20130%20126zM212%2086v2h-4v-2h4zm4%200h-2v2h2v-2zm-20%200v.1a5%205%200%200%200-.56%209.65l.06.25%201.12%204.48a2%202%200%200%200%201.94%201.52h.01l7.02%2024.55a2%202%200%200%200%201.92%201.45h4.98a2%202%200%200%200%201.92-1.45l7.02-24.55a2%202%200%200%200%201.95-1.52L224.5%2096l.06-.25a5%205%200%200%200-.56-9.65V86a14%2014%200%200%200-28%200zm4%200h6v2h-9a3%203%200%201%200%200%206h26a3%203%200%201%200%200-6h-3v-2h2a12%2012%200%201%200-24%200h2zm-1.44%2014l-1-4h24.88l-1%204h-22.88zm8.95%2026l-6.86-24h18.7l-6.86%2024h-4.98zM150%20242a22%2022%200%201%200%200-44%2022%2022%200%200%200%200%2044zm24-22a24%2024%200%201%201-48%200%2024%2024%200%200%201%2048%200zm-28.38%2017.73l2.04-.87a6%206%200%200%201%204.68%200l2.04.87a2%202%200%200%200%202.5-.82l1.14-1.9a6%206%200%200%201%203.79-2.75l2.15-.5a2%202%200%200%200%201.54-2.12l-.19-2.2a6%206%200%200%201%201.45-4.46l1.45-1.67a2%202%200%200%200%200-2.62l-1.45-1.67a6%206%200%200%201-1.45-4.46l.2-2.2a2%202%200%200%200-1.55-2.13l-2.15-.5a6%206%200%200%201-3.8-2.75l-1.13-1.9a2%202%200%200%200-2.5-.8l-2.04.86a6%206%200%200%201-4.68%200l-2.04-.87a2%202%200%200%200-2.5.82l-1.14%201.9a6%206%200%200%201-3.79%202.75l-2.15.5a2%202%200%200%200-1.54%202.12l.19%202.2a6%206%200%200%201-1.45%204.46l-1.45%201.67a2%202%200%200%200%200%202.62l1.45%201.67a6%206%200%200%201%201.45%204.46l-.2%202.2a2%202%200%200%200%201.55%202.13l2.15.5a6%206%200%200%201%203.8%202.75l1.13%201.9a2%202%200%200%200%202.5.8zm2.82.97a4%204%200%200%201%203.12%200l2.04.87a4%204%200%200%200%204.99-1.62l1.14-1.9a4%204%200%200%201%202.53-1.84l2.15-.5a4%204%200%200%200%203.09-4.24l-.2-2.2a4%204%200%200%201%20.97-2.98l1.45-1.67a4%204%200%200%200%200-5.24l-1.45-1.67a4%204%200%200%201-.97-2.97l.2-2.2a4%204%200%200%200-3.09-4.25l-2.15-.5a4%204%200%200%201-2.53-1.84l-1.14-1.9a4%204%200%200%200-5-1.62l-2.03.87a4%204%200%200%201-3.12%200l-2.04-.87a4%204%200%200%200-4.99%201.62l-1.14%201.9a4%204%200%200%201-2.53%201.84l-2.15.5a4%204%200%200%200-3.09%204.24l.2%202.2a4%204%200%200%201-.97%202.98l-1.45%201.67a4%204%200%200%200%200%205.24l1.45%201.67a4%204%200%200%201%20.97%202.97l-.2%202.2a4%204%200%200%200%203.09%204.25l2.15.5a4%204%200%200%201%202.53%201.84l1.14%201.9a4%204%200%200%200%205%201.62l2.03-.87zM152%20207a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm6%202a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm-11%201a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm-6%200a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm3-5a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm-8%208a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm3%206a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm0%206a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm4%207a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm5-2a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm5%204a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm4-6a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm6-4a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm-4-3a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm4-3a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm-5-4a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm-24%206a1%201%200%201%201%202%200%201%201%200%200%201-2%200zm16%205a5%205%200%201%200%200-10%205%205%200%200%200%200%2010zm7-5a7%207%200%201%201-14%200%207%207%200%200%201%2014%200zm86-29a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm19%209a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm-14%205a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm-25%201a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm5%204a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm9%200a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm15%201a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm12-2a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm-11-14a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm-19%200a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm6%205a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm-25%2015c0-.47.01-.94.03-1.4a5%205%200%200%201-1.7-8%203.99%203.99%200%200%201%201.88-5.18%205%205%200%200%201%203.4-6.22%203%203%200%200%201%201.46-1.05%205%205%200%200%201%207.76-3.27A30.86%2030.86%200%200%201%20246%20184c6.79%200%2013.06%202.18%2018.17%205.88a5%205%200%200%201%207.76%203.27%203%203%200%200%201%201.47%201.05%205%205%200%200%201%203.4%206.22%204%204%200%200%201%201.87%205.18%204.98%204.98%200%200%201-1.7%208c.02.46.03.93.03%201.4v1h-62v-1zm.83-7.17a30.9%2030.9%200%200%200-.62%203.57%203%203%200%200%201-.61-4.2c.37.28.78.49%201.23.63zm1.49-4.61c-.36.87-.68%201.76-.96%202.68a2%202%200%200%201-.21-3.71c.33.4.73.75%201.17%201.03zm2.32-4.54c-.54.86-1.03%201.76-1.49%202.68a3%203%200%200%201-.07-4.67%203%203%200%200%200%201.56%201.99zm1.14-1.7c.35-.5.72-.98%201.1-1.46a1%201%200%201%200-1.1%201.45zm5.34-5.77c-1.03.86-2%201.79-2.9%202.77a3%203%200%200%200-1.11-.77%203%203%200%200%201%204-2zm42.66%202.77c-.9-.98-1.87-1.9-2.9-2.77a3%203%200%200%201%204.01%202%203%203%200%200%200-1.1.77zm1.34%201.54c.38.48.75.96%201.1%201.45a1%201%200%201%200-1.1-1.45zm3.73%205.84c-.46-.92-.95-1.82-1.5-2.68a3%203%200%200%200%201.57-1.99%203%203%200%200%201-.07%204.67zm1.8%204.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63%201.17-1.03a2%202%200%200%201-.2%203.7zm1.14%205.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35%201.23-.63a2.99%202.99%200%200%201-.6%204.2zM275%20214a29%2029%200%200%200-57.97%200h57.96zM72.33%20198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01%204.01%200%200%200%207.09%202.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99%201.99%200%200%201-2%202%202%202%200%200%201-1.66-.88zM75%20176c.38%200%20.74-.04%201.1-.12a4%204%200%200%200%206.19%202.4A13.94%2013.94%200%200%201%2084%20185v24a6%206%200%200%201-6%206h-3v9a5%205%200%201%201-10%200v-9h-3a6%206%200%200%201-6-6v-24a14%2014%200%200%201%2014-14%205%205%200%200%200%205%205zm-17%2015v12a1.99%201.99%200%200%200%201.22%201.84%202%202%200%200%200%202.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98%203.98%200%200%201-5.35%203.77%203.98%203.98%200%200%201-.65-.3V209a4%204%200%200%200%204%204h16a4%204%200%200%200%204-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6%206%200%200%201-5.2-3%207%207%200%200%201-6.47-4.88A12%2012%200%200%200%2058%20185v6zm9%2024v9a3%203%200%201%200%206%200v-9h-6zM-17%20191a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm19%209a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202H3a1%201%200%200%201-1-1zm-14%205a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm-25%201a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm5%204a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm9%200a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm15%201a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm12-2a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2H4zm-11-14a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm-19%200a1%201%200%200%200%200%202h2a1%201%200%200%200%200-2h-2zm6%205a1%201%200%200%201%201-1h2a1%201%200%200%201%200%202h-2a1%201%200%200%201-1-1zm-25%2015c0-.47.01-.94.03-1.4a5%205%200%200%201-1.7-8%203.99%203.99%200%200%201%201.88-5.18%205%205%200%200%201%203.4-6.22%203%203%200%200%201%201.46-1.05%205%205%200%200%201%207.76-3.27A30.86%2030.86%200%200%201-14%20184c6.79%200%2013.06%202.18%2018.17%205.88a5%205%200%200%201%207.76%203.27%203%203%200%200%201%201.47%201.05%205%205%200%200%201%203.4%206.22%204%204%200%200%201%201.87%205.18%204.98%204.98%200%200%201-1.7%208c.02.46.03.93.03%201.4v1h-62v-1zm.83-7.17a30.9%2030.9%200%200%200-.62%203.57%203%203%200%200%201-.61-4.2c.37.28.78.49%201.23.63zm1.49-4.61c-.36.87-.68%201.76-.96%202.68a2%202%200%200%201-.21-3.71c.33.4.73.75%201.17%201.03zm2.32-4.54c-.54.86-1.03%201.76-1.49%202.68a3%203%200%200%201-.07-4.67%203%203%200%200%200%201.56%201.99zm1.14-1.7c.35-.5.72-.98%201.1-1.46a1%201%200%201%200-1.1%201.45zm5.34-5.77c-1.03.86-2%201.79-2.9%202.77a3%203%200%200%200-1.11-.77%203%203%200%200%201%204-2zm42.66%202.77c-.9-.98-1.87-1.9-2.9-2.77a3%203%200%200%201%204.01%202%203%203%200%200%200-1.1.77zm1.34%201.54c.38.48.75.96%201.1%201.45a1%201%200%201%200-1.1-1.45zm3.73%205.84c-.46-.92-.95-1.82-1.5-2.68a3%203%200%200%200%201.57-1.99%203%203%200%200%201-.07%204.67zm1.8%204.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63%201.17-1.03a2%202%200%200%201-.2%203.7zm1.14%205.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35%201.23-.63a2.99%202.99%200%200%201-.6%204.2zM15%20214a29%2029%200%200%200-57.97%200h57.96z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`
