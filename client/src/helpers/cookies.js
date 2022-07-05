export const getCookie = (key) => {
    const result = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)")
    return result ? result.pop() : ""
}

export const setCookieInHours = (key, value, hoursToExpire) => {
    const date = new Date()
    date.setTime(date.getTime() + (hoursToExpire * 60 * 60 * 1000))
    document.cookie = key + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}