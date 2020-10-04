function centerDist(box1, box2) {
    // inputs are [x1, y1, x2, y2]
    center1 = [(box1[0]+box1[2])/2, (box1[1]+box1[3])/2]
    center2 = [(box2[0]+box2[2])/2, (box2[1]+box2[3])/2]
    dist = math.sqrt((center1[0]-center2[0])**2 + (center1[1]-center2[1])**2))
    return dist
}

function frameDiff(prev_frame, next_frame) {
    // prev_frame and next_frame are dictionaries like this {mask: False, bboxes: [x1, y1, x2, y2]} where the numbers are integers
    prev_mask = prev_frame['mask']
    prev_bboxes = prev_frame['bboxes']
    next_mask = next_frame['mask']
    next_bboxes = next_frame['bboxes']
    prev_ref = []
    for(i = 0; i < prev_bboxes.length; i++) {
        ref = i
        min = dist(prev_bboxes[i], next_bboxes[0])
        for(j = 0; j < next_bboxes.length; j++) {
            if (dist(prev_bboxes[i], next_bboxes[0]) < min) {
                min = dist(prev_bboxes[i], next_bboxes[0])
                ref = j
            }
        }
        if (min < threshold) {
            prev_ref.push(ref)
        }
    }
}