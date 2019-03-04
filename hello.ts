import forceNumber from 'force-number'

export default function (numStr: string) {
  return 'Hello, ' + forceNumber(numStr) + '!'
}
