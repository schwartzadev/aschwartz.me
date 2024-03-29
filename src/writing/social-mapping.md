---
layout: post.njk
title: Why I didn’t launch a social mapping platform
subtitle: ... and some of my thinking on web3
tags: post
---

In this post, I dive into some of my thinking around social mapping platforms (and why I decided to not launch my own!) and explore my challenges and successes in trying to learn about web3.

# Insider

From around August 2021 through November 2021 I worked on a social media app. The project, insider, was to be a social mapping platform—a more personal way to find new places to explore and travel. I came very close to releasing a MVP of this app, but ultimately chose not to. Here’s why.

## The premise

One of the core principles for insider was that there’s too much information “out there” and that our current information retrieval systems do a poor job at sifting through this information. Google tries to predict our searches but often is incorrect. And the so-called wisdom of crowds is devoid of wisdom. (When’s the last time you were confident in an online rating system?)

So, one of the aims was to re-center dining, nightlife, and travel recommendations around people who you actually know and care about. Think: early, naive social media platforms where Friends meant people you were actually friends with.

This quaint take on social media, though, somewhat misses the boat: it only works insofar as your friends give you good recommendations, and they give you good recommendations _across many domains_. Perhaps Ken has phenomenal coffee recommendations but awful taste in Mexican cuisine. Or Henry will always love something that’s cheap, regardless of its quality. These types of issues abound because nobody has the same tastes as you, so at best you can find people who are proxies for your tastes and follow them.

In theory there’s an algorithmic approach that could resolve lots of these problems—domain-aware recommendation could take into account that Ken and I have similar tastes in cafes—but unless I know someone whose tastes are similar to mine in _every domain_, this would circumvent the original premise of leveraging recommendations from people you know and trust by recommending suggestions from people I’ve never before met.

## The space

Yelp is obviously a huge player in this arena. In fact, the insider MVP leveraged Yelp’s API and some creative querying and caching strategies to power the business data records on the backend. But it’s worth considering why Yelp falls short.

There are lots of platforms out there that aim to supplant algorithms in place recommendations, like [Welcome](https://welco.me/), Superlocal, Noted, and Pao.

In February 2022, I wrote that I didn't think “any of these apps will succeed—and neither will big players like Yelp and Google Maps.” This, of course, remains to be seen. But as of June 2023, three of these four platforms no longer exist. Why? Because **taste is tricky, it’s unique, and it’s extremely hard to replicate**.

Spotify is a good counterexample to this claim: by and large, it does a pretty good job at recommending music that you might like. But the music domain and the physical places domains are more different than they are alike. On any day, Spotify users may listen to dozens of songs; at most, you’ll visit only a handful of places. Spotify has lots of metadata (or “item features” in recommender system parlance) on each track, including BPM, genres, artists, record labels, albums, collaborating artists, and so on.

Places have lots of features, too, but they’re much harder to capture: What is a cafe’s vibe? What is this bar’s energy? How did that restaurant smell? What was the lighting like in this store? Unless (or until?) we can develop a system that captures this degree of nuance—namely, the subtle, intangible things that we like about a place in an accurate, multivariate fashion, I doubt we’ll wind up with a great recommendation system for places.

### Trust CONTINUE

Part of what makes this tricky is that one of the core selling points around these local social platforms is trust. The pitch goes, “you can trust these recommendations more than Google Maps because...” There’s always a reason.

But the trust inherent in these platforms, I believe, often comes from an extremely low reward for gaming a nascent platform. If you as a business owner make an undifferentiated product in a low-margin marketplace (think: Amazon), you likely have a high reward for gaming the trust in the system. The reward from artificially increasing your ratings or [otherwise engaging in untrustworthy behavior](https://www.wired.com/story/amazon-failed-to-protect-your-data-investigation/) is significant.

On smaller platforms, the reward is comparatively lower—the impact of your inflated ratings is commensurately smaller. So it’s natural for smaller platforms to be more trustworthy.

This is to say, **the new platform likely isn't doing anything different, it's just new**.

The relevant question, then, is “_What can nascent platforms do to maintain trust as they scale?_” And I’m not sure there’s much they can do—bad actors will go to further lengths to exploit trust as platforms grow and the relative reward increases.

# Web3 for people who know nothing about web3

I know barely anything about decentralized finance (”DeFi”) or NFTs or web3 generally. But a lot of money and energy from everyday people is being thrown at this sector, which makes me feel like I ought to at least know what’s going on.

First, here’s a couple of my naïve observations:

1. There’s a bias towards “wins.” This is the case with most types of investments and bets, but when I hear about friends (or friends of friends) who have money in crypto or who explore NFTs, I almost always hear about wins and rarely about losses.
2. This seems to be a bubble.
3. It’s difficult to get an unbiased explanation of these technologies. **This is a gateway issue to actually understanding this space**. Most everyone that writes about web3 literally has money on the line. They’re probably invested in the technologies that they evangelize. And so their information is likely not objective or disinterested.
4. While there are a lot of people that are enthralled with web3, there are also a lot of people that are confused and skeptical, often because of the above reasons.

So, how can I learn about web3 in some rigorous, no-bullshit way? I started by asking friends for explainers. One sent me [a document](https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf) riddled with indecipherable sentences like:

> If you aren’t a HODLer, and can’t stomach four year bear markets, then whenever MVRV hits 3 tends to be a good time to take gains. (Sell a kidney or a newborn to buy when MVRV falls below 1.) In the three previous “double bubbles” - which you can really only see using a metric like MVRV since previous “bubbles” barely register on a price chart - the amount of time spent above 3 has gotten progressively shorter

Maybe this makes perfect sense to you. But for me, this is a passage devoid of meaning.

To be honest, after asking around for resources and coming up short, I somewhat gave up on trying to understand this space. But after a little while, I came across [The Crypto Syllabus](https://the-crypto-syllabus.com/). I want to be clear—I don’t think this is a silver bullet. Though it does seem to be a good starting point for understanding these technologies.

The Crypto Syllabus is mostly a collection of other people’s resources on web3 technologies. It’s a little overwhelming at first, but the [basics page](https://the-crypto-syllabus.com/basics/) offers a lot of down to earth explanations of relevant technologies.

Indeed, the very first source The Crypto Syllabus suggests is a [Bank of America report](https://business.bofa.com/content/dam/boamlimages/documents/articles/ID21_1498/Digital_Assets_Primer_Redaction.pdf) on “Digital Assets.” This report is refreshingly dry and surprisingly optimistic on NFTs and DeFi, particularly when considering that the Bank of America very much represents the “old guard” of financial institutions. If you take one thing out of my writings on this web3 soul searching, I hope you read this report.

I want to add a disclaimer about The Crypto Syllabus, though. It’s not clear who writes for the organization or who funds it. The Center for the Advancement of Infrastructural Imagination (CAII) supports this work, though I’m not convinced why I ought to trust CAII more than any other person in this space. Evgeny Morozov is [clearly involved](https://the-crypto-syllabus.com/about-us/).

---

I want to leave you with this excellent quote from Ira Glass. It’s something that describes my current approach to writing and my learnings through coding. Here’s the quote in full:

> Nobody tells this to people who are beginners, and I really wish somebody had told this to me.

> All of us who do creative work, we get into it because we have good taste. But it's like there is this gap. For the first couple years that you're making stuff, what you're making isn't so good. It’s not that great. It’s trying to be good, it has ambition to be good, but it’s not that good.

> But your taste, the thing that got you into the game, is still killer. And your taste is good enough that you can tell that what you're making is kind of a disappointment to you. A lot of people never get past that phase. They quit.

> Everybody I know who does interesting, creative work they went through years where they had really good taste and they could tell that what they were making wasn't as good as they wanted it to be. They knew it fell short. Everybody goes through that.

> And if you are just starting out or if you are still in this phase, you gotta know its normal and the most important thing you can do is do a lot of work. Do a huge volume of work. Put yourself on a deadline so that every week or every month you know you're going to finish one story. It is only by going through a volume of work that you're going to catch up and close that gap. And the work you're making will be as good as your ambitions.

> I took longer to figure out how to do this than anyone I’ve ever met. It takes awhile. It’s gonna take you a while. It’s normal to take a while. You just have to fight your way through that.

—[Ira Glass](https://jamesclear.com/ira-glass-failure)


---

_This post was lightly edited in June 2023 to bring the content up to date._
