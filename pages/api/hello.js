export default function handler(req, res) {
  // API 요청을 처리하고 JSON 응답을 반환합니다.
  res.status(200).json({ result: 'True' });
}