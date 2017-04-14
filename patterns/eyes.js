import {defaultFill, defaultOpacity} from './_defaults'

export const eyes = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2212%22%20viewBox%3D%220%200%2020%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eeyes%3C%2Ftitle%3E%3Cpath%20d%3D%22M6%2012c0-.622-.095-1.221-.27-1.785C6.818%2011.317%208.33%2012%2010%2012c1.67%200%203.182-.683%204.27-1.785-.175.564-.27%201.163-.27%201.785h2c0-2.21%201.79-4%204-4V6c-1.67%200-3.182.683-4.27%201.785C15.905%207.22%2016%206.622%2016%206c0-.622-.095-1.221-.27-1.785C16.818%205.317%2018.33%206%2020%206V4c-2.21%200-4-1.79-4-4h-2c0%20.622.095%201.221.27%201.785C13.182.683%2011.67%200%2010%200%208.33%200%206.818.683%205.73%201.785%205.905%201.22%206%20.622%206%200H4c0%202.21-1.79%204-4%204v2c1.67%200%203.182.683%204.27%201.785C4.095%207.22%204%206.622%204%206c0-.622.095-1.221.27-1.785C3.182%205.317%201.67%206%200%206v2c2.21%200%204%201.79%204%204h2zm-4%200c0-1.105-.895-2-2-2v2h2zm16%200c0-1.105.895-2%202-2v2h-2zM0%202c1.105%200%202-.895%202-2H0v2zm20%200c-1.105%200-2-.895-2-2h2v2zm-10%208c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0-2c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
