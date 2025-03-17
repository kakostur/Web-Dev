def make_bricks(small, big, goal):
    remaining_goal = goal - min(goal // 5, big) * 5
    return remaining_goal <= small
