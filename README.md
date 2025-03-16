# Set up
```bash
docker-compose up --build
```

## Developer notes
When a user is deleted. I should iterate all the users in order to remove the friendship related with the deleted user. To solve this I could use an event driven architecture in order to publish an evento to clean the relationship. Then I should to start a batch processing (scroll API) and for better scallability I could use a distributed task in order to parallelize.


## Challenges: 
Implementing the relationship distance logic (BFS) was the most challenging part. I chose BFS because it’s efficient for finding the shortest path in an unweighted graph.

## Decisions: 
I used a static list of users for simplicity, but in a real-world scenario, a database would be better.