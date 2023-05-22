export const validStatusCodesObject = {
  100: {
    status: "Continue",
    message: "The request has been received, continuing process.",
  },
  101: {
    status: "Switching Protocols",
    message:
      "The request has been received and the server is switching to a different protocol.",
  },
  102: {
    status: "Processing",
    message:
      "The request has been received, but the processing has not been completed.",
  },
  103: {
    status: "Early Hints",
    message:
      "The request has been received and the server is providing early hints to the client.",
  },
  200: {
    status: "OK",
    message: "The request was fulfilled!",
  },
  201: {
    status: "Created",
    message:
      "The request has been fulfilled and a new resource has been created.",
  },
  202: {
    status: "Accepted",
    message:
      "The request has been accepted for processing, but the processing has not been completed.",
  },
  203: {
    status: "Non-Authoritative Information",
    message:
      "The request was fulfilled, but the information returned is not from the original server.",
  },
  204: {
    status: "No Content",
    message:
      "The request was fulfilled, but there is no additional content to return.",
  },
  205: {
    status: "Reset Content",
    message:
      "The request was fulfilled and the client should reset the document view.",
  },
  206: {
    status: "Partial Content",
    message:
      "The request was fulfilled and only part of the document was returned.",
  },
  207: {
    status: "Multi-Status",
    message:
      "The request was fulfilled and the response includes multiple 200 OK responses.",
  },
  208: {
    status: "Already Reported",
    message:
      "The request was fulfilled and the information has already been reported.",
  },
  226: {
    status: "IM Used",
    message:
      "The request was fulfilled and the server has used the provided If-Match header.",
  },
  300: {
    status: "Multiple Choices",
    message: "The request has more than one possible response.",
  },
  301: {
    status: "Moved Permanently",
    message: "The requested resource has been permanently moved to a new URI.",
  },
  302: {
    status: "Found",
    message: "The requested resource has been temporarily moved to a new URI.",
  },
  303: {
    status: "See Other",
    message: "The client should make a GET request to the specified URI.",
  },
  304: {
    status: "Not Modified",
    message:
      "The requested resource has not been modified since the last request.",
  },
  307: {
    status: "Temporary Redirect",
    message:
      "The client should make a temporary GET request to the specified URI.",
  },
  308: {
    status: "Permanent Redirect",
    message:
      "The client should make a permanent GET request to the specified URI.",
  },
  400: {
    status: "Bad Request",
    message:
      "The request could not be understood by the server due to malformed syntax.",
  },
  401: {
    status: "Unauthorized",
    message: "The request requires user authentication.",
  },
  402: {
    status: "Payment Required",
    message: "The request requires payment.",
  },
  403: {
    status: "Forbidden",
    message: "The request is forbidden.",
  },
  404: {
    status: "Not Found",
    message: "The requested resource could not be found.",
  },
  405: {
    status: "Method Not Allowed",
    message: "The requested method is not allowed for the requested resource.",
  },
  406: {
    status: "Not Acceptable",
    message: "The requested resource is not available in the requested format.",
  },
  407: {
    status: "Proxy Authentication Required",
    message: "The request requires proxy authentication.",
  },
  408: {
    status: "Request Timeout",
    message: "The request timed out.",
  },
  409: {
    status: "Conflict",
    message: "The request conflicts with another request.",
  },
  410: {
    status: "Gone",
    message: "The requested resource is no longer available.",
  },
  411: {
    status: "Length Required",
    message: "The request did not specify the length of the request body.",
  },
  412: {
    status: "Precondition Failed",
    message: "The request failed due to a precondition.",
  },
  413: {
    status: "Payload Too Large",
    message: "The request body is too large.",
  },
  414: {
    status: "URI Too Long",
    message: "The URI is too long.",
  },
  415: {
    status: "Unsupported Media Type",
    message: "The request body is in an unsupported format.",
  },
  416: {
    status: "Range Not Satisfiable",
    message: "The requested range is not satisfiable.",
  },
  417: {
    status: "Expectation Failed",
    message: "The server cannot meet the expectation set by the request.",
  },
  421: {
    status: "Misdirected Request",
    message:
      "The request was directed to a server that is not able to handle it.",
  },
  422: {
    status: "Unprocessable Entity",
    message: "The request entity could not be processed.",
  },
  423: {
    status: "Locked",
    message: "The requested resource is locked.",
  },
  424: {
    status: "Failed Dependency",
    message: "The request failed due to a dependency.",
  },
  426: {
    status: "Upgrade Required",
    message: "The client must upgrade to a newer protocol.",
  },
  428: {
    status: "Precondition Required",
    message: "The request requires the request to be conditional.",
  },
  429: {
    status: "Too Many Requests",
    message: "The client has exceeded the rate limit.",
  },
  431: {
    status: "Request Header Fields Too Large",
    message: "The request header fields are too large.",
  },
  451: {
    status: "Unavailable For Legal Reasons",
    message: "The request is not available due to legal reasons.",
  },
  500: {
    status: "Internal Server Error",
    message: "The server encountered an unexpected condition.",
  },
  501: {
    status: "Not Implemented",
    message: "The server does not support the request method.",
  },
  502: {
    status: "Bad Gateway",
    message: "The server received an invalid response from a gateway.",
  },
  503: {
    status: "Service Unavailable",
    message: "The server is unavailable.",
  },
  504: {
    status: "Gateway Timeout",
    message: "The server did not receive a timely response from a gateway.",
  },
  505: {
    status: "HTTP Version Not Supported",
    message: "The server does not support the requested HTTP version.",
  },
  506: {
    status: "Variant Also Negotiates",
    message:
      "The server is unable to handle the request because it is negotiating a different variant.",
  },
  507: {
    status: "Insufficient Storage",
    message: "The server is unable to store the requested resource.",
  },
  508: {
    status: "Loop Detected",
    message:
      "The server detected an infinite loop while processing the request.",
  },
  510: {
    status: "Not Extended",
    message: "The server does not support the requested extension.",
  },
  511: {
    status: "Network Authentication Required",
    message:
      "The client must authenticate to the network before accessing the requested resource.",
  },
} as const;

export const validStatusCodesArr = Object.keys(validStatusCodesObject).map((e) =>
  Number(e)
);
